import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const LGBTRessources = () => {
  const backgroundImage = 'url(' + require('assets/img/lgbt-flag.jpg') + ')'

  useEffect(() => {
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <MyNavbar />
      <div className='wrapper'>
        <BlogHeader
          title='Important Resources and LGBTQ+ Organisations Once You’ve Settled'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            At DARNA, we’re committed not only to helping you find the apartment
            of your dreams but also assisting and contributing to the LGBTQ+
            community as best we can. It’s for that reason that we’ve compiled
            the following list of useful resources and LGBTQ+ organizations that
            you can contact should you ever need any assistance or advice.
            Moving to a new city can be a difficult and overwhelming experience,
            and sometimes speaking with like-minded individuals can go a long
            way towards offsetting that sense of hardship. The following list is
            exhaustive, and we’ll keep on expanding it as we get in contact with
            and partner with compassionate and conscientious support groups.
          </p>
          <p>
            <strong>manCHECK Berlin</strong>
          </p>
          <p>
            manCHECK is a mixed group of employees and volunteers committed to
            helping gay and bisexual men maintain their health. They do this
            through a number of different programs and by providing information
            to help them stay informed, aware and safe. They provide a number of
            advice and services regarding drugs, sex, and getting tested.
          </p>
          <p>
            <strong>Schwulenberatung Berlin</strong>
          </p>
          <p>
            Established in 1982, Schwulenberatung Berlin is one of the oldest
            help and advice centers catering to gay men in Berlin.
            Self-described as “a combined competence center covering diverse
            issues concerning men who love men, and much more”, Schwulenberatung
            is staffed with a number of qualified professionals offering advice
            on topics ranging from sex to drug addiction, aging, illness,
            unemployment, disabilities and much more. They also host a number of
            different projects such as Lebensort Vielfalt, a retirement home for
            queer people.
          </p>
          <p>
            <strong>UHLALA</strong>
          </p>
          <p>
            The UHLALA Group is one of the leading LGBTQ+ social businesses
            within Germany. Their mission is to network with, educate and
            empower LGBTQ+ people while also connecting them with LGBTQ+
            companies and organizations. They host events, speeches, offer
            consulting services and utilize different projects and brands in
            order to fulfill their mission.
          </p>
          <p>
            <strong>Unicorns in Tech</strong>
          </p>
          <p>
            Started in 2014 as a network for queer people in tech, Unicorns in
            Tech now has a thriving global membership which is constantly
            expanding in order to bring together tech enthusiasts and
            professionals. Created by the above-mentioned UHLALA Group, Unicorns
            in Tech organize monthly meetups and events hosted by LGTBQ+
            partners and companies.
          </p>
          <p>
            <strong>Quarteera</strong>
          </p>
          <p>
            Quarteera is a Russian non-profit LGBTQ+ organization that has
            existed since 2009 and seeks to work with Russian LGBTQ+ migrants in
            Germany. In the future, they plan to create a professional
            counseling service, one that would provide both psychological and
            legal support.
          </p>
          <p>
            <strong>LSBTI Berlin</strong>
          </p>
          <p>
            A joint venture between LesMigraS/Lesbenberatung (Lesbian Counseling
            Services), LSVD Berlin-Brandenburg, Schwulenberatung (Gay Counseling
            Services) Berlin and Sonntags-Club, LSBTI Berlin is a portal for
            anyone who has experienced violence or discriminiation and needs
            advice, counselling, or simply someone to talk to.
          </p>
          <p>
            <strong>Transinterqueer</strong>
          </p>
          <p>
            Transinterqueer, or TrIQ, has been providing professional consulting
            services for all those identifying as trans, inter or queer. TrIQ
            offers a number of informative platforms and projects, as well as
            educational work on trans, inter and queer lifestyles. TrlQ is also
            part of a broader network of many other projects, such as Queer Life
            and Transgender Europe.
          </p>
          <p>
            <strong>MANEO</strong>
          </p>
          <p>
            MANEO is the Berlin Anti-Violence-Project. In operation since 1990,
            MANEO tackles the issue of violence against queer people with
            serious intent and professionalism. With almost three decades of
            experience under their belt, MANEO is the most experienced and
            best-known gay anti-violence-project in Germany. The staff at MANEO
            provide advice to victims of violence as well as keep records of
            anti-gay acts of violence in order to help with future violence
            prevention.
          </p>
          <p>
            <strong>DrugRehab</strong>
          </p>
          <p>
            Members of the lesbian, gay, bisexual, transgender and queer
            community have rates of harmful substance use higher than those of
            the general population. Their daily battles with discrimination and
            stigma cause high levels of stress that may push them toward drug
            and alcohol misuse. DrugRehab works to spread awareness and to be an
            informational resource for those impacted by alcohol and drug
            dependence.
          </p>

          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default LGBTRessources
