import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const Anmeldung = () => {
  const backgroundImage = 'url(' + require('assets/img/anmeldunghow.jpg') + ')'

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
          title='How To Get Your Anmeldung: The Process Demystified'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            If you’ve never heard of the word Anmeldung, you will soon enough.
            Along with danke and bitte, it’s likely to be one of the first words
            that enter your German vocabulary. It translates to registration,
            and the reason for its importance is that it’s the precursor to
            doing everything and anything when it comes to living in Berlin.
          </p>
          <p>
            From the time you move into an apartment, you’ll have 14 days to
            register your address at the Bürgeramt. It’s this process that is
            called Anmeldung. Once you’ve completed it, you’ll receive your
            Meldebescheinigung, or registration certificate. You’ll want to hold
            on to this document. Without it, you’ll be unable to sign up for
            health insurance, take out an internet contract, get a gym
            membership, sign a long-term rental or participate in any other
            bureaucratic process that requires a registered address. Sound
            intimidating? Don’t worry - below we’ll take a look in detail at
            everything you need to successfully and painlessly complete your
            Anmeldung.
          </p>
          <p>
            <strong>What do I need for my Anmeldung?</strong>
          </p>
          <p>
            The acquiring of an Anmeldung is subject to a strange paradox. In
            order to get your Anmeldung, you need a place to live. However, in
            order to get an apartment contract, you need your Anmeldung. It’s
            frustrating, to say the least, but there is a solution.
          </p>
          <p>
            Your Anmeldung is likely to be your first brush with German
            bureaucracy, and that can be an intimidating experience. Even more
            so given the fact that the entire form-filling process takes place
            entirely in German. While you might get lucky and deal with an
            English speaker, the chances are that it will be Deutsch the entire
            way through. In this case, it helps to travel to the Bürgeramt with
            a German-speaking friend, or send a German speaker to conduct your
            Anmeldung on your behalf. If you choose the latter option, you’ll
            need a signed letter of consent called a Vollmacht. On top of that,
            or if you choose to do the Anmeldung yourself, you’ll also need the
            following documents:
          </p>
          <p>- A valid passport or ID</p>
          <p>
            - The rental agreement or contract from your landlord called a
            Wohnungsgeberbestätigung.
          </p>
          <p>
            - If you’re subletting or staying at a friend’s place, you’ll need a
            signed letter from them stating that you are staying with them in
            the meantime. This letter doesn’t have to be intricate, just a
            simple, written confirmation of your stay.
          </p>
          <p>
            An Anmeldung Form, a form in German which you can find at any
            Bürgeramt, or which you can download{' '}
            <a
              href='http://www.berlin.de/formularserver/formular.php?402608'
              className='btn-link btn btn-warning'>
              here
            </a>
            .
          </p>
          <p>
            Once you’ve gathered and filled in all of these documents, you’ll
            want to locate your nearest Bürgeramt. Head down there, take a
            number and wait to be seated. It might take a little while, but rest
            assured that the Anmeldung process itself only takes a few minutes,
            after which you won’t have to do it again unless you move addresses.
            If you’re not keen on waiting, however, you can also book in
            advance.{' '}
          </p>

          <p>
            <strong>How to get an appointment at the Bürgeramt</strong>
          </p>
          <p>
            Getting an appointment at the Bürgeramt is a pretty straightforward
            process. Simply follow{' '}
            <a
              href='https://service.berlin.de/dienstleistung/120686/'
              className='btn-link btn btn-warning'>
              this link
            </a>{' '}
            and scroll down the page until you find your kiez. Find the
            Bürgeramt you wish to visit, click on termin machen, and you’ll be
            taken to a calendar with a list of available appointment times. The
            problem is that these dates are often booked weeks or even months in
            advance, so you might not be able to get an appointment within the
            two-week registration window.
          </p>
          <p>
            If you’re not crazy about waiting for hours to get your Anmeldung
            processed, check the appointments for your nearest Bürgeramt from
            about 8 am, and keep refreshing the page every couple of minutes.
            People cancel appointments all the time and there’s a chance that
            you’ll be able to take their place. You don’t necessarily have to
            register at your nearest Bürgeramt, either. If you’re willing to
            travel further, you’re able to do your Anmeldung at any Bürgeramt in
            the city.
          </p>
          <p>
            <strong>What if I change my address?</strong>
          </p>
          <p>
            In the event that you change addresses in Berlin, you’ll have to do
            your Anmeldung all over again. Because the Anmeldung is the
            registration of your address, every time you move you’ll have to let
            the city know where you’ve relocated to. The process doesn’t change
            at all; you’ll still have to book an appointment or wait at the
            Bürgeramt. The only thing that will change is the address on your
            Meldebescheinigung.
          </p>
          <p>
            <strong>What if I leave the country?</strong>
          </p>
          <p>
            If for whatever reason you have to leave Germany and move to another
            country, you’ll have to deregister your address. This process is
            called the Abmeldung. It’s quite important that you go through with
            this process, otherwise, you might still end up paying German tax
            and even health insurance even though you no longer live there. The
            abmeldung also allows you to cancel most long-term contracts before
            they’re due to end.
          </p>
          <p>
            When it comes to performing to Abmeldung, the process is identical
            to the Anmeldung. Either book an appointment at the Bürgeramt online
            or show up on the day and wait to be seen. The only difference is
            that you will fill out an Abmeldung Form as opposed to an Anmeldung
            Form.
          </p>
          <p>
            If you don’t have time to make a personal trip to the Bürgeramt
            before your departure, you can also deregister by registered mail.
            Simply download the form by following{' '}
            <a
              href='http://www.berlin.de/formularserver/formular.php?402609'
              className='btn-link btn btn-warning'>
              this link
            </a>
            , include a copy of your passport, head to your nearest post office
            and ask them to post the documents per Einschreiben (by registered
            mail) to the Bürgeramt, which is required for legal documents.
          </p>
          <p><small>Photo by Flo Karr on Unsplash</small></p>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default Anmeldung