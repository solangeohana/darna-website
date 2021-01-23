import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const Costs = () => {
  const backgroundImage = 'url(' + require('assets/img/berlin-lights.jpg') + ')'

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
          title='How Much Does It Cost To Rent In Berlin?'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            Berlin’s reputation as a European haven for cheap rent is a popular,
            albeit slightly overblown, one. What once provided a bastion for
            starving artists to live and create their magnum opuses has now been
            overtaken by gentrification and the unbridled machine of progress.
            That being said, the rental prices in Berlin are still pretty cheap,
            especially when compared with other capitals throughout Europe.
            Thanks in large part to Germany’s rental control laws, which operate
            on the principle that rent should increase according to inflation -
            that is, at a gradual and controlled pace - it’s still possible to
            find a great deal when apartment hunting.
          </p>
          <p>
            But what exactly is a great deal? What type of costs should you
            expect? And how much should those costs amount to? Below we’re going
            to breakdown all of the costs you can expect to pay on your
            apartment when renting in Berlin.
          </p>
          <p>
            <strong>Warmmiete vs Kaltmiete</strong>
          </p>
          <p>
            While searching for an apartment in Berlin, you’re going to come
            across two common words that are used to describe the type of flat
            on offer. Warmmiete and Kaltmiete. They essentially translate to
            “warm rent” and “cold rent”. A flat that is rented out as Warmmiete
            means that the offered price includes utilities, or Nebenkosten,
            while a flat rented out as Kaltmiete does not, and means your total
            monthly rental fee will be a fair bit more than the price stipulated
            on the ad.
          </p>
          <p>
            <strong>Nebenkosten</strong>
          </p>
          <p>
            As mentioned above, Nebenkosten refers to all of the utilities and
            extra fees that are part and parcel of any apartment rental in
            Berlin or otherwise. They usually include central heating, hot water
            as well as city taxes such as sewage and trash collection, and are
            estimated rather than applied as a fixed cost. This means that at
            the year-end your Nebenkosten will be recalculated and you’ll either
            receive a rebate if you paid too much, or have to pay a little bit
            more if you paid too little.
          </p>
          <p>
            For some perspective, the average utility cost (including
            electricity and gas) of an 85sqm flat rental for two people in
            Berlin,{' '}
            <a
              href='https://www.expatistan.com/price/utilities/berlin'
              className='btn-link btn-warning'>
              according to Expatistan
            </a>
            , is €177 per month.
          </p>
          <p>
            <strong>Gas and Electricity</strong>
          </p>
          <p>
            Unfortunately, the above-mentioned Nebenkosten don’t cover gas or
            electricity. Your landlord also won’t do this for you. You’ll have
            to get in touch with a gas and electricity provider such as
            <a
              href='https://www.vattenfall.de/'
              className='btn-link btn-warning'>
              Vattenfall
            </a>{' '}
            or{' '}
            <a
              href='https://www.entega.de/'
              className='btn-link btn-warning'>
              Entega
            </a>{' '}
            and set up your own account with them. When you first move in you’ll
            automatically be supplied electricity by Vattenfall and gas by Gasag
            to guarantee that your flat is livable, but you might save more
            money in the long run by comparing prices between providers.{' '}
            <a
              href='https://www.check24.net/strom-vergleich/?c24pp_zipcode=10117&c24pp_totalconsumption=2000&c24_calculate=vergleichen+%C2%BB'
              className='btn-link btn-warning'>
              Check24
            </a>{' '}
            is a great resource for doing exactly this.
          </p>
          <p>
            <strong>Kaution</strong>
          </p>
          <p>
            Deposits are easy to overlook, yet they’re one of the biggest costs
            that all renters have to pay when securing a flat. In Germany they
            call it a Kaution, and the amount you have to pay differs depending
            on the requirements of different landlords and house management
            agencies. If you’re lucky, you'll only be paying a little more than
            you would for one month’s rent. However, many people are shocked to
            find out that deposits can cost up to three times the amount of your
            monthly rent. It’s a huge sum that you have to pay upfront before
            you can move in, and it’s largely unavoidable.
          </p>
          <p>
            But there is a silver lining - three month’s rent is the absolute
            limit that can be charged for a deposit. If a landlord insists on
            more than that then they’re breaking the law. For example, an
            apartment that costs €600 can only require a maximum deposit of
            €1800.
          </p>
          <p>
            <strong>Price by District</strong>
          </p>
          <p>
            The amount that you’re going to pay for your apartment is heavily
            dependent on the area in which you choose to rent. In this regard,
            Berlin is pretty varied. Whether you prefer the more upmarket areas
            of Mitte or Charlottenburg, like to live within the eye of the
            creative and cultural storm of Kreuzberg or Neukölln, or would like
            to settle in some of Berlin’s more gay-friendly neighborhoods like
            Schöneberg or Prenzlauer Berg, you can definitely find something to
            suit you, although the prices will vary. Flats are generally priced
            per square meter, so calculating it in this way will give you a good
            idea of how much your rent should be.
          </p>
          <p>
            As of 2019, and according to Guthmann, here are the average square
            meter prices of some of Berlin’s most popular districts:
          </p>
          <p>- Mitte: €18/sqm</p>
          <p>- Prenzlauer Berg: €16/sqm</p>
          <p>- Pankow: €10.6/sqm</p>
          <p>- Kreuzberg: €16/sqm</p>
          <p>- Charlottenburg: €14/sqm</p>
          <p>- Wilmersdorf: €14/sqm</p>
          <p>- Friedrichshain: €16/sqm</p>
          <p>- Schöneberg: €14/sqm</p>
          <p>- Neukölln: €13/sqm</p>
          <p>- Tiergarten: €15.5/sqm</p>
          <p>- Marzahn-Hellersdorf: €8.85/sqm</p>
          <p>
            For a full list of areas, see Guthmann’s website{' '}
            <a
              href='https://guthmann.estate/en/market-report/'
              className='btn-link btn-warning'>
              here
            </a>
            .
          </p>
          <p>
            For a different perspective, check out{' '}
            <a
              href='https://www.immobilienscout24.de/content/dam/is24/ibw/dokumente/mietmap-berlin-2017.jpg'
              className='btn-link btn-warning'>
              this map
            </a>{' '}
            which shows you the average price of flats based on their proximity
            to U-Bahn and S-Bahn stations throughout Berlin.
          </p>
          <p>
            <strong>Beitragsservice</strong>
          </p>
          <p>
            The bane of all Berlin renters, the Beitragsservice is essentially a
            monthly television and radio license fee that has to be paid over
            and above rent and any other utilities. This fee has to be paid
            regardless of whether or not your apartment even has the capability
            to utilize TVs or radios, and so is frustrating for many Berliners
            who use neither. The fee is justified on the basis that it allows
            the German government to provide a breadth of high-quality broadcast
            media without having to rely on advertisers or sponsors.
          </p>
          <p>
            As of 2019, this tax is €17.50 per month per flat. It’s a fixed
            amount, meaning whether there are two or four people in your flat,
            the monthly fee remains the same.
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

export default Costs
