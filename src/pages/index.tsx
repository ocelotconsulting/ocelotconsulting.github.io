import path from 'path'
import {promises as fs} from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import HeroSlider from '@/components/index/HeroSlider'
import BottomCTASection from '@/components/BottomCTASection'
import Waves from '@/components/Waves'
import CaseStudyCarousel from '@/components/index/CaseStudyCarousel'
import ContactButton from '@/components/ContactButton'
import SlideUp from '@/components/animations/SlideUp'
import FadeIn from '@/components/animations/FadeIn'
import ArrowIcon from '@/components/icons/ArrowIcon'

import fastest50 from '@/public/fast-50.png'
import services from '@/public/index/services.jpg'
import servicesLg from '@/public/index/services-lg.jpg'
import automate from '@/public/index/automate.jpg'
import automateMobile from '@/public/index/automate-mobile.jpg'
import empower from '@/public/index/empower.jpg'
import empowerMobile from '@/public/index/empower-mobile.jpg'

export default function Home({cards, setShowContact}: any) {
  return (
    <>
    <div className="relative">
      <Section
        backLayer={<HeroSlider />}
        className="md:min-h-[678px]"
        containerClassName="z-20"
      >
        <div className="z-20 lg:w-1/2 text-white text-center lg:text-left">
          <p className="text-xl md:text-2xl tracking-widest mb-5">
            TECHNOLOGY DELIVERED.
          </p>

          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Modern solutions for companies seeking to innovate
          </h1>

          <ContactButton setShowContact={setShowContact}>
            Request a Call
          </ContactButton>
        </div>
      </Section>

      <Waves className="absolute -bottom-10 left-0 right-0 z-10" />
    </div>

    <Section
        className={`md:mx-5 bg-left lg:bg-left-top bg-no-repeat bg-[length:65%_auto] md:!py-0 px-0 lg:bg-[url('/assets/index/services.jpg')] xl:bg-[url('/assets/index/services-lg.jpg')]`}
    >
      <div className="grid lg:grid-cols-2">
        <div>
          <Image
            className="mb-4 lg:hidden"
            src={services}
            alt=''
          />
        </div>
        <div className="bg-white grid md:grid-cols-2 gap-5 p-8 md:p-16">
          <FadeIn>
            <h2 className="text-xl font-bold text-black">Cloud Transformation</h2>
            <p>Migrate to public cloud or optimize and automate existing cloud environments</p>
            <Link className="text-accent block mt-5" href="/services/cloud-transformation">
              Learn More
              <ArrowIcon className="w-3 inline-block fill-accent ml-3" />
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-bold text-black">Full-Stack Development</h2>
            <p>Build modern, user-centric, cloud-native solutions</p>
            <Link className="text-accent block mt-5" href="/services/full-stack-development">
              Learn More
              <ArrowIcon className="w-3 inline-block fill-accent ml-3" />
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-bold text-black">Data Engineering</h2>
            <p>Create scalable data ecosystems to enable the most rapid, reliable, and high-quality data for your organization</p>
            <Link className="text-accent block mt-5" href="/services/data-engineering">
              Learn More
              <ArrowIcon className="w-3 inline-block fill-accent ml-3" />
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-bold text-black">Data Science &amp; AI</h2>
            <p>Utilize advanced analytics to leverage complex data and unlock actionable insights</p>
            <Link className="text-accent block mt-5" href="/services/data-science">
              Learn More
              <ArrowIcon className="w-3 inline-block fill-accent ml-3" />
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="text-xl font-bold text-black">Strategy & Execution</h2>
            <p>Define and deliver business and technical strategies</p>
            <Link className="text-accent block mt-5" href="/services/strategy-execution">
              Learn More
              <ArrowIcon className="w-3 inline-block fill-accent ml-3" />
            </Link>
          </FadeIn>

          <FadeIn>
            <Image
              className="max-w-[180px] object-contain mx-auto"
              src={fastest50}
              alt="Fastest-Growing Private Companies"
            />
          </FadeIn>
        </div>
      </div>
    </Section>

    <Section
      style={{backgroundImage: `url(${automate.src})`}}
      className="bg-cover bg-center sm:max-md:!p-0 max-md:!bg-none bg-med-gray"
    >
      <Grid>
        <div className="md:hidden">
          <Image className="object-cover md:h-[500px] lg:h-auto" src={automateMobile} alt="" />
        </div>
        <div>
          <SlideUp className="md:my-10 lg:my-20 md:mr-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">Modernize your technology portfolio</h2>
            <p className="font-bold mb-4">Anything that belongs in source code management or a data repository.</p>
            <p>We specialize in class-leading solutions for modern application development, cloud engineering, data engineering, and data science</p>
          </SlideUp>
        </div>
        <div />
      </Grid>
    </Section>

    <Section className="bg-black text-white">
      <div className="text-center mb-10">
        <span className="block text-lg tracking-widest mb-2">
          COMMITTED TO YOUR SUCCESS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Let us help you drive <br className="hidden md:inline" />
          innovation and growth
        </h2>
        <Button href="/about/">
          See our Origin Story
        </Button>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <SlideUp className="bg-white/20 text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Engineering Experts</h3>
          <p>We have the expertise you need in architecture, implementation planning, and execution for upgrading existing platforms or building novel new capabilities.</p>
        </SlideUp>
        <SlideUp className="bg-white/20 text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Partnership & Coaching</h3>
          <p>While collaborating, we provide training and mentoring to ensure that you are fully prepared to own solutions after our engagement is complete.</p>
        </SlideUp>
        <SlideUp className="bg-white/20 text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Low Overhead</h3>
          <p>We do not oversell services. Over 90% of our staff are engineers & architects focused on delivery. This allows us to offer the best talent with the best return on investment.</p>
        </SlideUp>
        <SlideUp className="bg-white/20 text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Real-world Experience</h3>
          <p>With backgrounds rooted in Enterprise IT, we are uniquely prepared to provide reliable lessons learned from real-world experience. We know you, because we were you.</p>
        </SlideUp>
      </div>
    </Section>

    <Section>
      <h2 className="text-center text-3xl lg:text-5xl font-bold text-black mb-4">
        Our best sales pitch is our track <br className="hidden md:inline" />
        record of success
      </h2>
      <p className="text-center text-xl mb-12">We have helped clients from multi-national corporations to SMB’s deliver transformational solutions.</p>

      <CaseStudyCarousel cards={cards} />
    </Section>

    <Section
      style={{backgroundImage: `url(${empower.src})`}}
      className="bg-cover bg-center sm:max-lg:!p-0 max-lg:!bg-none bg-med-gray"
    >
      <Grid className="min-h-[500px]">
        <div>
          <Image className="lg:hidden object-cover md:h-[600px] lg:h-auto" src={empowerMobile} alt="" />
        </div>
        <FadeIn className="lg:p-12 md:py-4 md:pr-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-2">Making technology work for you, not the other way around</h2>
          <p className="mb-10">Technology investments don’t always yield the desired value, and companies are facing major challenges in harnessing technology to fuel innovation. <strong>Ocelot can help you navigate modern platforms to maximize your return on investment.</strong></p>

          <Button href="/case-studies">
            Browse our Success Stories
          </Button>
        </FadeIn>
      </Grid>
    </Section>

    <BottomCTASection setShowContact={setShowContact} />
    </>
  )
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const cardsJson = await fs.readFile(dataDirectory + '/smallCards.json', 'utf8')

  return {
    props: {
      cards: JSON.parse(cardsJson)
    }
  }
}
