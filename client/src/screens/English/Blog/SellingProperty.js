import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const SellingProperty = () => {
  const backgroundImage = 'url(' + require('assets/img/landing-1.jpg') + ')'

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
          title='Selling Your Property: 5 Common Questions'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            Property tends to be the most valuable thing an individual
            possesses, and if the landlord also lives in the house or apartment,
            it undoubtedly holds a lot of memories. Many questions and
            insecurities arise when selling property and every individual sells
            for a different reason. What needs to be considered when selling
            property? When is a good time to sell property? How much is the
            property worth? What is required for transfer of ownership? What are
            the associated costs? This is just a small set of questions that
            sellers often ask DARNA Immobilien when they decide to sell their
            property. Common mistakes often occur when the sale is not affected
            with the help of experts such as assessors or real estate agents.
          </p>
          <p>
            Landlords sell properties for all sorts of reasons. In 2019, there
            were over 30,000 apartments advertised in Berlin alone (Guthmann,
            2020), but only 7% of all buyers choose to purchase directly from
            the owner. If you’re a real estate agent, or a property owner here
            are DARNA’s five most common questions asked by sellers.
          </p>
          <p>
            <strong className='title'>
              How can one prepare to sell their property?{' '}
            </strong>
            The most common repairs that need to be made are leaks or damp
            problems, faulty wires, and plumbing problems. One wants to ensure
            that the property is cleaned and decorated nicely and ready to be
            photographed. Renovations can also be made to raise property value.
            This improves the quality of the offer, but project timelines should
            be kept in mind. Selling season is in Summer. If a project isn’t
            finished until Winter, then the property may not sell at the desired
            price or within the desired timeframe.
          </p>
          <p>
            <strong className='title'>
              Should the property be staged or shown as empty?{' '}
            </strong>
            A staged property sells quicker than an empty one, but buyers should
            be able to imagine themselves in the space without personal items or
            clutter distracting them.
          </p>
          <p>
            <strong className='title'>
              Should the seller be present during the viewings?
            </strong>{' '}
            The short answer is no, it often makes the buyers uncomfortable and
            hesitant to ask questions. Alternatively, if the seller is too
            emotionally attached to the property, buyers may be intimidated.
            This is why it is important to find a trustworthy professional to
            assist potential buyers and filter multiple offers.
          </p>
          <p>
            <strong className='title'>How much is the property worth?</strong>{' '}
            While figures about similar properties in the neighborhood can most
            likely be sourced online, the actual value depends on the property’s
            individual features. It is best to get a property valuation from a
            professional.
          </p>
          <p>
            <strong className='title'>
              Is the service of a real estate agent actually necessary?{' '}
            </strong>
            The real estate market is a tricky one and there are incredible
            benefits with experience. In depth knowledge of the market can help
            accurately price a property, perform marketing, and ensure an easy
            sale with high returns. Sellers are certain that a real estate agent
            is there to help them with every step of the process and acting in
            the sellers’ best interests while respecting their needs.
          </p>
          <p>
            DARNA Immobilien has a treasure of experience and property selling
            resources and connections from being Europe’s first queer real
            estate agency. If sellers choose to be part of the DARNA family,
            they get a lifelong friend who will help with all of the above and
            more, including hiring real estate photographers, creating content,
            and storytelling via the exposé and marketing.
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

export default SellingProperty
