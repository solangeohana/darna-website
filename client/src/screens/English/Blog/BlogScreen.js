import React, { useEffect } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'

// core components
import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const BlogScreen = () => {
  const backgroundImage =   "url(" + require("assets/img/blog.jpg") + ")"

  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])


  return (
    <>
      <MyNavbar />
      <div className='wrapper'>
        <BlogHeader title='BLOG' imageUrl={backgroundImage}/>
        <div className='section container text-center'>
          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                Selling Your Property: 5 Common Questions
              </CardTitle>
              <CardText className='text-left'>
                Landlords sell properties for all sorts of reasons. In 2019,
                there were over 30,000 apartments advertised in Berlin alone,
                but only 7% of all buyers choose to purchase directly from the
                owner. If you’re a real estate agent, or a property owner here
                are DARNA’s five most common questions asked by sellers.
              </CardText>
              <Button
                color='warning'
                href='/en/blog/selling-your-property-common-questions'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>April 7, 2020</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                7 Ways to Improve Your Property Value
              </CardTitle>
              <CardText className='text-left'>
                Deutsche Bank said in a report that “we expect that, during the
                coming years, house prices will continue to rise in all
                metropolitan areas covered” while the Central Real Estate
                Committee (ZIA) warned that the construction of new housing is
                being "totally neglected.” Property value will continue to
                increase; however, property use leads to wear and tear.
                Renovation and refurbishment are inescapable. Renovating certain
                areas in the house or on the property can have a positive effect
                on the market value of the property. DARNA presents you with the
                seven best ideas that will pay off when the property is sold.
              </CardText>
              <Button
                color='warning'
                href='/en/blog/7-ways-to-improve-your-property-value'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>March 18, 2020</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                Important Resources and LGBTQ+ Organisations Once You’ve Settled
              </CardTitle>
              <CardText className='text-left'>
                At Darna we’re committed not only to helping you find the
                apartment of your dreams, but also assisting and contributing to
                the LGBTQ+ community as best we can. It’s for that reason that
                we’ve compiled the following list of useful resources and LGBTQ+
                organizations that you can contact should you ever need any
                assistance or advice.
              </CardText>
              <Button color='warning' href='/en/blog/important-resources'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>August 12, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                Important Terms To Know When Apartment Hunting in Berlin
              </CardTitle>
              <CardText className='text-left'>
                As a non-German speaker moving to Berlin, navigating the rental
                (and buying) market can be an extremely daunting experience.
                With convoluted-looking terms such as renovierungsbedürftig and
                Wohnberechtigungsschein, apartment hunting can quickly become
                devolve into scratching your head and sighing with frustration.
                In an effort to make your experience an easier, faster and less
                painful one, we’ve put together a list of useful and important
                terms to know when apartment hunting in Berlin.
              </CardText>
              <Button color='warning' href='/en/blog/important-terms-to-know'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>July 26, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                How To Get Your Anmeldung: The Process Demystified
              </CardTitle>
              <CardText className='text-left'>
                If you’ve never heard of the word anmeldung, you will soon
                enough. Along with danke and bitte, it’s likely to be one of the
                first words that enter your German vocabulary. It translates to
                registration, and the reason for its importance is that it’s the
                precursor to doing everything and anything when it comes to
                living in Berlin.
              </CardText>
              <Button color='warning' href='/en/blog/how-to-get-your-anmeldung'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>July 17, 2019 </small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                What Is A SCHUFA And How Do I Get One?
              </CardTitle>
              <CardText className='text-left'>
                As we discussed in a previous article, you need quite a long
                list of documents in order to secure a flat rental in Berlin.
                One of the most important ones which every landlord will request
                is a recent credit report certificate, or in German - a Schufa
                Bonitätsauskunft. But because your credit information is so
                securely protected by German law, it’s impossible for either the
                landlord or rental agency in question to simply browse through
                it themselves. Rather, you have to obtain a copy of your own
                Schufa report and hand it to them yourself.
              </CardText>
              <Button color='warning' href='/en/blog/what-is-a-schufa'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>July 10, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                What Documents Do I Need To Rent An Apartment In Berlin?
              </CardTitle>
              <CardText className='text-left'>
                So you’ve decided that you’re serious about moving to Berlin;
                you’ve sussed out the best neighborhoods to live in, and you’re
                aware of how much you’ll be paying (more or less) for your
                apartment - now it’s time to actually get down to renting one.
                But what does that process look like? And what documents do you
                need in order to rent an apartment in Berlin?
              </CardText>
              <Button color='warning' href='/en/blog/documents-needed-to-rent'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>June 24, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                How Much Does It Cost To Rent In Berlin?
              </CardTitle>
              <CardText className='text-left'>
                When looking for an apartment rental in Berlin, what exactly is
                a great deal? What type of costs should you expect? And how much
                should those costs amount to? In this post we’re going to
                breakdown all of the costs you can expect to pay on your
                apartment when renting in Berlin.
              </CardText>
              <Button color='warning' href='/en/blog/cost-of-renting-berlin'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>June 17, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                What To Expect As A Queer Person Moving To Berlin
              </CardTitle>
              <CardText className='text-left'>
                You’ve travelled to Berlin for a weekend. You’ve covered the
                walking tour, seen everything Alexanderplatz has to offer,
                fallen in love with the cheap beer and the extravagant people
                you see in the parks and on the U-bahn. On your way home to
                whatever city you live in you start thinking, “maybe I could
                live there…”
              </CardText>
              <Button color='warning' href='/en/blog/queer-in-berlin'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>June 6, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                Things You Can Only See and Feel in Berlin
              </CardTitle>
              <CardText className='text-left'>
                There’s something very unique about living in Berlin. It’s a
                feeling that only residents can define, but anyone who has ever
                walked its streets will have felt in some form or another. It’s
                a feeling of wonder, of life, of possibility. And it’s different
                for every kiez.
              </CardText>
              <Button
                color='warning'
                href='/en/blog/things-you-can-only-see-and-feel-in-berlin'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>May 24, 2019</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                7 Things You Should Know Before Moving to Berlin
              </CardTitle>
              <CardText className='text-left'>
                It seems that everyone and their mother is moving to Berlin
                these days, and with good reason. As summer approaches it’s hard
                not to be charmed and seduced by the vibe of the city. The many
                green spaces begin to bloom again, providing space for the
                residents and tourists alike to relax in a way that is almost
                trademarked. Berliners take to the streets in colorful droves,
                outrageous outfits are seen in abundance, as are cheap beers
                bought from late shops which dot the city. Cafes spill out onto
                the sidewalk, and at night the city hums with the energy of a
                million restless revelers, eager to experience the world-famous
                nightlife which Berlin has become synonymous with.
              </CardText>
              <Button
                color='warning'
                href='/en/blog/7-things-you-should-know-before-moving-to-berlin'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>May 16, 2019 </small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag='h3'>
                The Best Gay Residential Areas in Berlin
              </CardTitle>
              <CardText className='text-left'>
                Two simple facts - Berlin is a great city to be gay in, and
                Berlin is a great city to live in. What was once the capital of
                one of the most oppressive regimes in history is now a
                flourishing monument of acceptance, tolerance, and celebration.
                Berlin has it all - safe, beautiful neighborhoods, a thriving
                LGBTQ community, incredible green spaces, delicious restaurants
                and bars by the thousands, salacious parties and cultural events
                unrivaled anywhere in the world, and one of the biggest Pride
                celebrations in Europe.
              </CardText>
              <Button
                color='warning'
                href='/en/blog/the-best-gay-residential-areas-in-berlin'>
                Read More
              </Button>
              <CardText>
                <small className='text-muted'>May 12, 2019</small>
              </CardText>
            </CardBody>
          </Card>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default BlogScreen
