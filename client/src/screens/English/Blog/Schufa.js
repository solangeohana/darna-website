import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const Schufa = () => {
  const backgroundImage = 'url(' + require('assets/img/schufa.jpg') + ')'

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
          title='What Is A SCHUFA And How Do I Get One?'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            As we discussed in a previous article, you need quite a long list of
            documents in order to secure a flat rental in Berlin. One of the
            most important ones which every landlord will request is a recent
            credit report certificate, or in German - a Schufa Bonitätsauskunft.
            But because your credit information is so securely protected by
            German law, it’s impossible for either the landlord or rental agency
            in question to simply browse through it themselves. Rather, you have
            to obtain a copy of your own Schufa report and hand it to them
            yourself.
          </p>
          <p>
            <strong>
              What exactly is a{' '}
              <a
                href='https://partnerprogramm.immowelt.de/go.cgi?pid=160&wmid=80&cpid=1&prid=1&subid=&target=schufa_page'
                className='btn-link btn-warning'>
                SCHUFA
              </a>
              ?
            </strong>
          </p>
          <p>
            SCHUFA is the abbreviation for Schutzgemeinschaft für Allgemeine
            Kreditsicherung - or General Credit Protection Agency - and is
            operated through the Schufa Holding AG, the largest credit reporting
            agency in Germany which is responsible for tracking and rating your
            credit score, as well as issuing Schufa reports.
          </p>
          <p>
            From the moment you set foot in Germany, every financial transaction
            you engage in is tracked and compiled under a file with your name
            on. This file is used to gauge with extreme accuracy how healthy
            your credit score is, and how good you are at paying back debts.
            This will help banks and other financial institutions determine how
            reliable you are when it comes to, for example, granting you a loan.
          </p>
          <p>
            Your credit score is exactly that: a score. It ranges from between
            100 - 600 and fluctuates depending on how early you pay back any
            outstanding debts.
          </p>
          <p>
            Generally, anything from 100-199 is a great rating to have and means
            that you’re a fairly low risk when it comes to paying future debts.
            200-299 is a slightly higher risk. 300 - 499 is quite a large risk.
            500 means that they have explicit evidence that you have at least
            one outstanding debt payment. And 600 means you’re likely unable to
            pay your debts entirely.
          </p>
          <p>
            <strong>How to apply for a SCHUFA</strong>
          </p>
          <p>
            A single Schufa report costs €29.95 and is valid for three months,
            after which you will have to pay for another one should you still
            require it.
          </p>
          <p>There are a few ways to apply for a Schufa report:</p>
          <p>
            - You can apply online and receive a Schufa Bonitätsauskunft
            instantly{' '}
            <a
              href='https://partnerprogramm.immowelt.de/go.cgi?cpid=1&pid=160&prid=1&subid=&target=schufa_page&wmid=80'
              className='btn-link btn-warning'>
              here
            </a>
            . This is generally the easiest method, and the most official,
            meaning all landlords will accept it without question.
          </p>
          <p>
            - You can apply via the German real estate companies such as{' '}
            <a
              href='https://bonitaetscheck.immobilienscout24.de/'
              className='btn-link btn-warning'>
              ImmobilienScout24
            </a>{' '}
            and{' '}
            <a
              href='https://schufa.immowelt.de/'
              className='btn-link btn-warning'>
              Immowelt
            </a>
            .
          </p>
          <p>
            - You can go down to your nearest Postbank or Volksbank and they
            will be able to give you one in person.
          </p>
          <p>
            Everyone is also entitled to one free SCHUFA Datekopie (copy of
            data) per year. This document is only meant to be used as a
            reference for your actual Schufa report, and so not all landlords
            may accept it. You can apply for it by following{' '}
            <a
              href='https://partnerprogramm.immowelt.de/go.cgi?cpid=1&pid=160&prid=1&subid=&target=schufa_page&wmid=80'
              className='btn-link btn-warning'>
              this link
            </a>
            .
          </p>
          <p>
            Your Schufa is a very important document which is going to hold a
            lot of weight when it comes to renting or buying a property in
            Germany. From the moment you register at the Bürgeramt, open a bank
            account or take out a cellphone contract in Germany, a Schufa report
            is automatically created for you, so take care to keep it as clean
            as possible from the start.
          </p>
          <p>
            If found this article helpful but still have other questions, check
            out Darna’s blog for a list of valuable and informative articles
            about properties in Berlin.
          </p>
          <p>
            <small>Photo by Vi5-a-Vi5 on Pixabay</small>
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

export default Schufa
