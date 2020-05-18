---
layout:      posts
background:  mediumBackground
title:       "Unit testing with React and Enzyme"
date:        2019-02-21 09:00:00
author:      "John O'Malley"
description: "Unit Testing React Components"
headerImg:  "/assets/images/blog/code.jpg"
---

One of the benefits of [React](https://reactjs.org/) is that rendering logic is completely independent of the DOM. This feature provides a number of advantages - server-side rendering, for instance - but perhaps the greatest is that unit testing using Node is made much easier.

Applications developed using Angular 1 + jQuery, for example, pretty much required that a DOM implementation exist in the global namespace. This was relatively easy to do with [jsdom](https://github.com/jsdom/jsdom) but required management of global state, which could be painful at times. Also, loading a full DOM implementation added significant
overhead.

Facebook provides a test renderer for components, and a library like [enzyme](http://airbnb.io/enzyme/) provides a nice API to render and inspect your components. So it's pretty easy to test components - but is it worth it?  Opinions differ somewhat on this point.

## The case against unit testing components

I've heard it argued that the actual components typically have straightforward logic and that there is little benefit to testing them. Some argue the middle ground that pure stateless components don't need to be tested while stateful components should be. 

In either event, the emitted JSX often contains boilerplate and purely presentational code - e.g. classes and sometimes multi-level nested `<div>` tags that just make a component render correctly with a certain CSS library. It's argued that testing the structure of the JSX is tedious and of dubious value. 
  
Another argument is made that functional testing - using Selenium or a similar tool - makes unit testing redundant. The proponent may readily concede that functional testing is slower and more expensive than unit testing, but if it's going to be done anyway why bother with unit testing?

## A rebuttal

I would argue that the ability to refactor with confidence is the best remedy for controlling technical debt and keeping a project well-structured and healthy. Refactoring without unit tests is the 
[free solo climbing](https://en.wikipedia.org/wiki/Free_solo_climbing) of software engineering. Some people undoubtedly possess the rare talent to do it, but it's scary as hell and slower to boot.

I'd love to say that the value of unit testing is settled science, but like pretty much everything in software engineering there's no universal consensus. It's true, for example, that unit testing is less critical in strongly typed static languages, but of course Javascript isn't one of those. All I can do is related my personal experience with unit testing.

I frequently find bugs during unit testing that never make it into the repository. When I refactor older code that seems structured strangely I often am reminded of why it was designed that way the unit tests. Unit tests give us a window into what the developer was thinking when he or she wrote the code - and that insight is invaluable.

Functional testing via selenium or some other tool is often slow and brittle and can be painful to maintain.  It's best to limit such testing to the critical paths in my experience.  By contrast unit tests are fast when implemented correctly and can be run continuously during development.

Our UI components will need to be refactored like any other source file and therefore need unit tests. The challenge is to write unit tests that are fast, free (or nearly free) of tedious boilerplate, and easy to read.

## What about TDD?

If you've ever learned test-driven-development you might wonder how effective it is for developing web UIs.  Based on  my experience, it's only occasionally useful.  It's a good idea, for example, to write a failing unit test that reproduces a known bug before you fix it.  Or if you've got a certain implementation in mind before you start coding and you're reasonably confident it's the right way to go then TDD is a good approach. 

But mostly TDD is an awkward fit for web UIs. So much of UI development is experimentation - spikes and the like. An orthodox TDD approach would, in my experience, just result in too much throwaway test code to be time-efficient.  

More generally (and subjectively), there's an argument to be made that understanding a test-first/test-driven philosophy is far more valuable than actually practicing TDD. A key advantage of test-first is that your tests are self-verifying - that is, because they start in a broken state and can only be fixed by writing the corresponding implementation you essentially test your test code at the same time.  

I would assert that it's worthwhile to go through the exercise to intuitively grasp the concept of test-first but less important to be orthodox when writing your code. By being careful and specific in one's assertions and breaking tests here and there as a sanity check it's possible to realized the benefits of test-first without being encumbered by the process.

## Keeping your unit tests maintainable and readable

To realize the value of UI unit testing, a little discipline is needed. Perhaps the most important concept is good old [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). I personally think there's too much copy/paste in unit testing code in the wild, and the duplication makes such code tedious to maintain. Luckily it's not too hard to avoid duplication without sacrificing clarity or readability.

Suppose you end up with multiple test functions in a suite and each requires several lines of common setup. If you copy/paste you are duplicating the same code block many times. Even worse, it's now a lot harder to tell the difference between the tests later on. For example: 

```js
import React from 'react'
import { shallow } from 'enzyme'
import InputForm from '../../src/form/InputForm'

describe('InputForm', () => {
  // BAD - don't do this
  // too much noise and duplication

  it('disables submit button when name is empty', () => {
    const onChange = jest.fn()
    const onSubmit = jest.fn()
    const submitButton = shallow(
      <InputForm name='' address='123 Fake Street' onChange={onChange} onSubmit={onSubmit}/>
    ).find('button')

    expect(submitButton.prop('disabled')).toBe(true)
  })

  it('disables submit button when address is empty', () => {
    const onChange = jest.fn()
    const onSubmit = jest.fn()
    const submitButton = shallow(
      <InputForm name='Marge Simpson' address='' onChange={onChange} onSubmit={onSubmit}/>
    ).find('button')

    expect(submitButton.prop('disabled')).toBe(true)
  })

  it('enables submit button when name and address are non-empty', () => {
    const onChange = jest.fn()
    const onSubmit = jest.fn()
    const submitButton = shallow(
      <InputForm name='Marge Simpson' address='123 Fake Street' onChange={onChange} onSubmit={onSubmit}/>
    ).find('button')

    expect(submitButton.prop('disabled')).toBe(false)
  })
})
```

You can find the example code [here](https://github.com/ocelotconsulting/react-unit-testing-examples), which employs [jest](https://jestjs.io) and [enzyme](https://airbnb.io/enzyme/).

In every test we have two lines that are simply duplicated, while the other two lines are largely duplicated with a bit of tweaking to satisfy the test. Visually they all look nearly identical and it's difficult to tell at a glance what each test is doing differently.

## Using common setup and utility functions

Common setup and helper functions can drastically reduce duplication. See 
[here](https://github.com/ocelotconsulting/react-unit-testing-examples/blob/master/test/form/InputForm.spec.js) for the full example. First of all, we'll put all of our props into a mutable object in a `beforeEach` block:

```js
describe('InputForm', () => {
  let props

  beforeEach(() => {
    // init props with a happy path - that way we can mutate before rendering to set up our test
    props = {
      name: 'Marge Simpson',
      address: '123 Fake Street',
      onChange: jest.fn(),
      onSubmit: jest.fn()
    }
  })
  // snip
})  
```

It's often useful to start with some kind of fully valid or 'happy path'. With the props configured as shown the submit button should be enabled.

Instead of rendering in each function, we could extract a helper function. We can also include a function that renders and returns true if the submit button is enabled.

```js
const shallowRender = () => shallow(<InputForm {...props}/>)

// snip

const isSubmitEnabled = () => !shallowRender().find('button').prop('disabled')
```

The `shallowRender` function isn't a huge savings in duplicated code, but does allow us to maybe add some logic later on.

Now our tests are a lot easier to read:

```js
it('disables submit button when name is empty', () => {
  props.name = ' '

  expect(isSubmitEnabled()).toBe(false)
})

it('disables submit button when address is empty', () => {
  props.address = ''

  expect(isSubmitEnabled()).toBe(false)
})

it('enables submit button when name and address are non-empty', () => {
  expect(isSubmitEnabled()).toBe(true)
})
```  

## Testing dynamically

You'll notice in the example code thus far that the name and address field have pretty much the same behavior. We could, if we wanted to, simply abstract the fields of the form into metadata or even props for the form, but this may or may not be desirable. With only two fields on the form, it's arguably overkill.

However it doesn't take much effort to test our field behavior with metadata rather than essentially duplicate blocks of code. One approach is to start with a helper function that returns metadata about he bound fields:

```js
const getBoundProperties = wrapper => {
  const instance = wrapper.instance()
  return [
    { property: 'name', onChange: instance.onNameChanged },
    { property: 'address', onChange: instance.onAddressChanged }
  ]
}
```

Now we can simply verify that all fields are bound in one test:

```js
it('binds to fields', () => {
  const wrapper = shallowRender()
  // an array of the props of all input fields in the form
  const fieldProps = wrapper.find('input').map(input => input.props())

  expect(fieldProps).toEqual(getBoundProperties(wrapper).map(({ property, onChange }) => ({
    id: `registration-form-${property}`,
    type: 'text',
    value: props[property],
    onChange
  })))
})
```

In our example code the components `onChange` prop expects to be called with something like `{ name: 'newName' }`. So we also verify that the handler functions delegate appropriately. Since the event is simple enough i'm not simulating it via enzyme in this example:

```js
it('triggers onChange from onChange handlers', () => {
  const wrapper = shallowRender()
  const properties = getBoundProperties(wrapper)

  properties.forEach(({ property, onChange }) => {
    const value = `${property} value`
    onChange({ target: { value } })
    expect(props.onChange).lastCalledWith({ [property]: value })
  })
})
```

Another approach you might consider is breaking this out into two tests, generated dynamically from metadata.

## Snapshot testing

A lot of JSX code is declarative and doesn't have any real logic. We probably don't want to do verbose and 
fine-grained testing of every individual attribute, but we might still want to make sure we do regression testing even after minor changes.  

Jest [snapshots](https://jestjs.io/docs/en/snapshot-testing) fit this role perfectly. For example, in the 
`'binds to fields'` test above suppose we decide to add the class `input-field` to each input element. The test will start to fail and we have to write some code to maintain it, even if `input-field` is a purely cosmetic change that we don't feel provides any value in testing.

First, we'd change the test to focus on the important stuff:

```js
it('binds to fields', () => {
  const wrapper = shallowRender()
  const fieldProps = wrapper.find('input').map(input => {
    const { value, onChange } = input.props()
    return { value, onChange }
  })

  expect(fieldProps).toEqual(getBoundProperties(wrapper).map(({ property, onChange }) => ({
    value: props[property],
    onChange
  })))
})
```

Then add a snapshot test for the InputForm component:  

```js
it('matches snapshot', () => {
  // capture the structure of the rendered component for regression testing
  expect(toJson(shallowRender())).toMatchSnapshot()
})
```

The snapshot file needs to be [committed](https://github.com/ocelotconsulting/react-unit-testing-examples/blob/master/test/form/__snapshots__/InputForm.spec.js.snap) and pushed on initial creation and each time it changes. Thanks to the [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) library we can also see the history of the structure of the component in a readable form. 

## Wrapping up - striking a balance

Testing every detail of the markup we generate is tedious and of dubious value.  Testing logic is not.  By keeping our tests free from noise and duplication and judicious use of snapshot testing, we can have the best of both worlds.

Thanks for reading.
