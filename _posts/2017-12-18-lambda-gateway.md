---
layout:      posts
background:  shortBackground
title:       "AWS Lambda + API Gateway"
subtitle:    "Simple Deployment via CloudFormation"
date:        2017-12-18 09:45:00
author:      "Larry Anderson"
headerImg:  "/assets/images/blog/gateway-lambda.png"
description: "Deploying a simple lambda with an API Gateway integration including custom authorizer and domain name."
---

## Lambda

A client has come asking about several small API's that they would like created, all of which execute in a small footprint (RAM/CPU), and return quickly. Normally the team would have either fit it into a microservice container or some other permanently hosted means, but this is exactly the type of "serverless" or non-permanent infrastructure functionality that AWS Lambda (or similar) was created for.

I have written several AWS Lambda functions over the past few years, normally around enabling security for other AWS assets or facilitating [Lets' Encrypt TLS certificate generation](https://github.com/ocelotconsulting/node-letsencrypt-lambda). However most of these were either driven off [periodic CloudWatch events](http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html) or some other intra-AWS non-HTTP trigger (S3 PUT, SNS, DynamoDB, etc).

## API Gateway

The AWS API Gateway has always on its surface appeared to be a black box due to what I've previously believed to be an overwhelming amount of AWS Console-based configuration. When I had perused the available functionality in the past, it seemed like there was a lot of vernacular which didn't quite fit my previous API work. Words like "resource", "stage", "methods", integration request/responses, models, etc all seemed not as coherent as coming up with a swagger specification along with an HTTP route and calling it a day.

{: .blog-center}
![API Gateway Vernacular](/assets/images/blog/2017-12-18-gateway-lambda/gateway_vernacular.png)

{: .blog-center}
Fig. 1 - Lots of words used by API Gateway

To get from an internal non-callable Lambda to a vanity-url fronted HTTP(s) API with cached authorization seemed like something which would take either a lot of custom work in the console or maybe something that should be better left for a docker swarm behind an ELB which also allowed for other application multi-tenancy. Hence, I ignored the AWS API Gateway for a few years, as gateways themselves (Akana for one) had always seemed to over-promise and under-deliver, and had never lived synergistically along-side of API development.

## Authorization

For blogging purposes, I created a simple custom authorizer for the Lambda functions, which always ["Allow"](https://github.com/ocelotconsulting/sample-custom-authorizer/blob/master/app.js#L17) the API to be called via http(s). Normally I would not recommend it, as it's the same as not securing the API, and the only inherent security in API Gateway is the obfuscation of the API ID being the first part of the URL. I'll probably blog again in the future on writing a proper custom authorizer.

The repo is [here](https://github.com/ocelotconsulting/sample-custom-authorizer), and it is [deployed](https://github.com/ocelotconsulting/sample-custom-authorizer/blob/master/cf-deploy.json) as a simple Lambda prior to usage in the Gateway as an authorizer by other Lambdas. Most often a custom authorizer would be used to validate an OAuth token and authorization data, to render an access decision. This is then cached by the API Gateway to improve performance.

{: .blog-center}
![Custom Authorizer](/assets/images/blog/2017-12-18-gateway-lambda/authorizer.png)

{: .blog-center}
Fig. 2 - Authorizer created by combo of the Cloudformation used below and an existing Authorizer Lambda

## Process

All that is necessary to run the CI/CD automation for this project is the ability to run AWS CLI commands. The detailed process is to:

  1. Deploy an initial version of the lambda
  2. Create 2 aliases for the lambda (in this case we use `TEST` and `PROD`, however some clients have data locality concerns and prefer separate accounts, in which case switching to a generic `V1` and `V2` might be a better option). [Stage variables](https://aws.amazon.com/blogs/compute/using-api-gateway-stage-variables-to-manage-lambda-functions/) were used as a way to combine Lambda versioning with API Gateway Stages.
  3. Initially `TEST` and `PROD` both point to the same alias, but with each `TEST` or `V2` (`V3`, `V4`, etc) release of new functionality, it would diverge.
  4. Create a model of the request/response for the deployment.
  5. Establish the authorizer
  6. Create the API -> Lambda integration

The [`README`](https://github.com/ocelotconsulting/lambda-gateway-hello#deployment) for the project details what is necessary, but essentially the following Bash script would deploy an API:

```bash
#!/bin/bash

npm run clean; npm run dist

aws cloudformation package \
    --template-file cf.json \
    --s3-bucket <artifact-bucket-here> \
    --output-template-file cf-packaged.yaml

aws cloudformation deploy \
    --template-file cf-packaged.yaml \
    --stack-name hello-api \
    --capabilities CAPABILITY_IAM

lambda_arn=$(aws cloudformation describe-stacks --stack-name hello-api --output json | jq -r '.Stacks[0].Outputs[] | select(.OutputKey == "ARN") | .OutputValue')

test_url=$(aws cloudformation describe-stacks --stack-name hello-api --output json | jq -r '.Stacks[0].Outputs[] | select(.OutputKey == "TestInvokeURL") | .OutputValue')

prod_url=$(aws cloudformation describe-stacks --stack-name hello-api --output json | jq -r '.Stacks[0].Outputs[] | select(.OutputKey == "ProdInvokeURL") | .OutputValue')
```

The last 2 variables (`test_url` and `prod_url`) return the API generated URLs to hit the 2 Stages defined.

## After initial deployment

After awhile, the original script above would need to be re-run in order to establish a new version of the Lambda (AWS only allows creation of a version if there is new lambda code deployed). Once a new version of the Lambda code has been deployed, the following script would allow the aliases for `PROD` or `TEST` to be updated.


```bash
#!/bin/bash

lambda_version=$(aws lambda publish-version \
    --function-name $lambda_arn \
    --description "New version of hello Lambda" | jq -r '.Version')

aws lambda update-alias \
  --function-name $lambda_arn \
  --name TEST \
  --function-version $lambda_version

test_version=$(aws lambda list-aliases \
  --function-name $lambda_arn \
  --output json | jq -r '.Aliases | map(select(.Name == "TEST")) | .[].FunctionVersion')

if [ "$test_version" ]; then \
  aws lambda update-alias \
    --function-name $lambda_arn \
    --name PROD \
    --function-version $test_version; else \
  echo "No version applicable for prod promotion."; \
fi
```

## Custom Domain (optional, but nice)

While it would technically work to have a generated API Id URL from the above steps to call, it might not seem as professional or easy to recall. So, presuming a root domain name (like `mydomain.com`) is under control within route53, you can import your certificate for your domain into AWS Certificate Manager (ACM). You can use cloudformation, sdk [like this](https://github.com/ocelotconsulting/node-letsencrypt-lambda/blob/master/bin/importToACM.js), or the CLI. I've chosen not to do it as part of the cloudformation template here, as it would only happen once per API, and the ways to accomplish it would vary by organization.

After the certificate is imported, you can run a script like the following to: get the ARN for the certificate, get the hosted zone which will host the DNS alias record, and create the record set within Route 53 and the domain name within API Gateway like in [this cloudformation template](https://github.com/ocelotconsulting/lambda-gateway-hello/blob/master/cf-domain.json).

```bash
#!/bin/bash

cert_arn=$(aws acm list-certificates | jq -r '.CertificateSummaryList[] | select(.DomainName == "hello.mydomain.com") | .CertificateArn')

hosted_zone=$(aws route53 list-hosted-zones | jq -r '.HostedZones[] | select(.Name == "mydomain.com.") | .Id')

aws cloudformation deploy --template-file cf-domain.json --stack-name hello-api-domain --capabilities CAPABILITY_IAM --parameter-overrides APICertificate=$cert_arn HostedZoneId=$hosted_zone
```

If real, the above CloudFormation would create the custom domain at `hello.mydomain.com` within the API Gateway, which would access the API Stages via basepaths (`https://hello.mydomain.com/v1` -> `https://<api-id>.execute-api.us-east-1.amazonaws.com/v1` and similar for `v2`).

## Swagger as an alternative

When developing an API, normally it is nice to be able to share documentation to serve as a contract for those who will be clients. AWS provides for this to happen as part of CloudFormation much in the same way as the previous template worked, however in this method the resources are created as a side effect of documentation ([swagger](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)).

Essentially you would run the first `aws cloudformation package/deploy` with the [alternative CloudFormation template](https://github.com/ocelotconsulting/lambda-gateway-hello/blob/master/cf-swagger.json), which would both define the same Gateway + Lambda resources, with the added bonus of making documentation available. When completed you can export the documentation using either the [secured HTTP](http://docs.aws.amazon.com/apigateway/api-reference/making-http-requests/) [method](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-export-api.html) or [utilizing the CLI](http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-export.html) like the following:

```bash
#!/bin/bash

aws apigateway get-export --rest-api-id <api-id> --stage-name v1 --export-type swagger swagger.json
```

The contents of the `swagger.json` file would look something like the following:

```json
{
  "swagger" : "2.0",
  "info" : {
    "version" : "2016-08-18T18:08:34Z",
    "title" : "HelloAPI Swagger"
  },
  "host" : "<api-id>.execute-api.us-east-1.amazonaws.com",
  "basePath" : "/v1",
  "schemes" : [ "https" ],
  "paths" : {
    "/hello" : {
      "get" : {
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "name" : "foo",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "200 response"
          }
        },
        "security" : [ {
          "api-authorizer" : [ ]
        } ]
      }
    }
  },
  "securityDefinitions" : {
    "api-authorizer" : {
      "type" : "apiKey",
      "name" : "Authorization",
      "in" : "header",
      "x-amazon-apigateway-authtype" : "custom"
    }
  }
}
```

## Summary

The above integration work combines the needs that an organization would have around deploying multiple API endpoints for a given project, and fitting a cloud-native solution for Functions As A Service (FaaS) into a larger CI/CD framework. CloudFormation and API Documentation (swagger) offer convenient ways of expressing API's so that all parties are clear on requirements as well as infrastructure needs. Lambdas are a powerful tool with their ability to serve as stand-alone ephemeral functionality. 

In addition to the CI/CD work necessary to deploy Lambda's via the Gateway, things like access to logging and accurate eventing/monitoring are still needed to come full circle in serverless infrastructure. Perhaps that's a blog topic for another day!
