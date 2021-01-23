import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const Documents = () => {
  const backgroundImage = 'url(' + require('assets/img/documents.jpg') + ')'

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
          title='What Documents Do I Need To Rent An Apartment In Berlin?'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            So you’ve decided that you’re serious about moving to Berlin; you’ve
            sussed out the best neighborhoods to live in, and you’re aware of
            how much you’ll be paying (more or less) for your apartment - now
            it’s time to actually get down to renting one. But what does that
            process look like? And what documents do you need in order to rent
            an apartment in Berlin?
          </p>
          <p>
            It’s no secret that Berlin is in the midst of a housing crisis.
            There simply isn’t enough affordable housing for the burgeoning
            population, and that means that when it comes to securing a
            long-term rental, competition is fierce. Flat viewings are often
            attended by dozens of hopefuls all looking to impress the landlord
            and lay claim to that sweet piece of alt-bau real estate. If you’re
            going to stand out you’ll have to come prepared.
          </p>
          <p>
            <strong>Papers, Please</strong>
          </p>
          <p>
            When it comes to property viewings, the difference between securing
            an apartment or not often comes down to whether or not you have all
            of the correct, up-to-date documents for the landlord or housing
            representative hosting the viewing in question. Showing up early,
            smiling, being polite - all of these things are necessary but
            superseded by whether or not you can prove that you have a steady
            income and that your credit rating doesn’t look like the state of
            Brandenburg Airport. And to do that you need very specific and
            correct paperwork that proves you have your life together. Below
            we’ll outline exactly what that paperwork looks like.
          </p>
          <p>
            <strong>Passport Copy</strong>
          </p>
          <p>
            Property laws within Germany state that for every flat viewing,
            prospective tenants have to hand over a copy of their passport to
            the housing estate or landlord of the apartment in question.
          </p>
          <p>
            <strong>Schufa Auskunft</strong>
          </p>
          <p>
            Your SCHUFA auskunft is a credit report detailed by the company
            SCHUFA Holding AG, and something that many landlords require to
            determine your creditworthiness. It essentially details how well
            you’ve paid your debts over the previous years, and demonstrates
            your trustworthiness when it comes to making payments on time. If
            you’ve never lived in Germany before then this won’t apply to you,
            as your credit history within the country will be non-existent.
          </p>
          <p>
            <strong>Proof Of Income</strong>
          </p>
          <p>
            Landlords often require three months worth of income statements as
            proof that you can afford to pay the rental price. Any payslips or
            invoices from your employer should work just fine. If you don’t have
            a fixed income or the required bank statements you’ll need a Bürge,
            or surety, that states that someone else - usually your guardian or
            parents - will cover your rent should you be unable to pay it.
          </p>
          <p>
            <strong>MIETSCHULDENFREIHEITSBESCHEINIGUNG</strong>
          </p>
          <p>
            This document is a mouthful but is necessary to prove that you have
            no outstanding debts from a previous tenancy. If you’re a student,
            former student, or have just moved to Germany, then a letter from
            your previous landlord stating that rental history is spotless will
            do. It’s worth noting that this document is not a strict requirement
            and some landlords won’t ask for it, but it’s still worth having.
            You can download a blank template{' '}
            <a
              href='http://www.mietschuldenfreiheitsbescheinigung.com/'
              className='btn-link btn-warning'>
              here
            </a>
            .
          </p>
          <p>
            <strong>Bank Statements</strong>
          </p>
          <p>
            Bank statements are necessary to prove that you have an active bank
            account and a regular flow of income. While it might seem somewhat
            superfluous on top of the income statements, it’s security for
            landlords to ensure that you can pay all of your bills.
          </p>
          <p>
            <strong>Keep at it !</strong>
          </p>
          <p>
            Once you have all the above documents, make multiple copies of them
            and carry them with you to all flat viewings. It also won’t hurt to
            have a cover letter written in German that impresses on the landlord
            your seriousness about wanting to rent a property. And don’t worry
            if you don’t find something immediately - securing a flat in Berlin
            is often a numbers game, and if it doesn’t work out the first time,
            there’s always another viewing around the corner.
          </p>
          <p>
            <small>Photo by Beatriz Pérez Moya on Unsplash</small>
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

export default Documents
