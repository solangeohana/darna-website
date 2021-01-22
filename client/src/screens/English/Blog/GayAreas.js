import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const GayAreas = () => {
  const backgroundImage = 'url(' + require('assets/img/gay-areas.jpg') + ')'

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
          title='The Best Gay Residential Areas in Berlin'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            Two simple facts - Berlin is a great city to be gay in, and Berlin
            is a great city to live in.
          </p>
          <p>
            What was once the capital of one of the most oppressive regimes in
            history is now a flourishing monument of acceptance, tolerance, and
            celebration. Berlin has it all - safe, beautiful neighborhoods, a
            thriving LGBTQ community, incredible green spaces, delicious
            restaurants and bars by the thousands, salacious parties and
            cultural events unrivaled anywhere in the world, and one of the
            biggest Pride celebrations in Europe.
          </p>
          <p>
            It comes as no surprise that Berlin is one of the most liveable
            cities in the world, regardless of your sexual orientation. It's
            especially good if you're gay, however. Did the introduction peak
            your interest? Are you looking at the next available flight? Great -
            then carry on reading. We've put together a list of some of the best
            gay residential areas in Berlin.
          </p>
          <p>
            <strong className='title'>Schöneberg</strong>
          </p>
          <p>
            The queen of the gay scene, it's impossible to mention gay
            residential areas of Berlin without having Schöneberg top the list.
            Since the 1920s, Schöneberg has consistently hosted a vibrant LGTBQ
            community, and its legacy still lives on today. Between cozy cafes,
            quirky museums, bustling restaurants, and a very popular gay bar and
            club scene, this neighborhood make for very easy living.
          </p>
          <h6>PLACES OF INTEREST:</h6>
          <p>
            <strong>Romeo und Romeo</strong> - a trendy cafe with gay owners,
            catering to a wonderfully diverse clientele.
          </p>
          <p>
            <strong>Tom's Bar</strong> - a legendary institution with some of
            the wildest parties this side of the Spree.
          </p>
          <p>
            <strong>Cafe Berio</strong> - a gay cafe with a massive street
            terrace for enjoying the weather.
          </p>
          <p>
            <strong>Memorial to Homosexual Holocaust Victims</strong> - a moment
            dedicated to all the persecution that the gay community faced by the
            Nazis.
          </p>
          <p>
            <strong>KaDeWe</strong> - Kaufhaus des Westens - or KaDeWe - is a
            luxurious department store, the second biggest in Europe only after
            Harrods in London.
          </p>
          <p>
            <strong className='title'>Prenzlauer Berg</strong>
          </p>

          <p>
            Prenzlauer Berg used to be the epicenter of East German
            counterculture, a welcoming home for artists as well as the LGTBQ
            community. Today the area is one of the most beautiful in all of
            Berlin, filled to the brim with young families, children-friendly
            cafes and boutique stores. It's one of the favorite districts for
            raising a family and still retains a reputation as one of the most
            gay-friendly neighborhoods throughout the city.
          </p>
          <h6>PLACES OF INTEREST:</h6>
          <p>
            <strong>Mauerpark</strong> - a popular park and Sunday destination
            featuring a huge flea market, street food, buskers by the dozen, and
            an outdoor karaoke show.
          </p>
          <p>
            <strong>Prater Garten</strong> - a massive, historic beer garden
            that has been in operation since 1837.
          </p>
          <p>
            <strong>Kulturbrauerei</strong> - an old brewery that has been
            refurbished into an event space, showcasing many music venues,
            stores, bars, markets, and a theatre.
          </p>
          <p>
            <strong>Kastanienallee</strong> - an incredibly beautiful street
            with countless cozy restaurants, bars, cafes, and shops to spend an
            afternoon or evening at.
          </p>
          <p>
            <strong>Kollwitzplatz</strong> - a square synonymous with upmarket
            cafes and bars, long and lazy Sunday brunches, and organic markets.
          </p>

          <p>
            <strong className='title'>Kreuzberg</strong>
          </p>
          <p>
            Arguably the coolest neighborhood in Berlin (although undoubtedly a
            vocal crowd is already screaming Neukölln! Neukölln!), Kreuzberg has
            always been and still is, a haven to artists, immigrants and queer
            communities.
          </p>
          <p>
            The district itself is incredibly diverse, featuring different areas
            each with their own charms and idiosyncrasies. The Bergmannkiez area
            is a charming neighborhood with numerous quirky cafes and thrift
            shops; residents close to Görlitzer Park can enjoy the varied street
            art, galleries, and bars with seemingly no closing time; while the
            Wrangelkiez area is popular for its gritty, alternative nightlife.
          </p>
          <p>
            Kreuzberg has something for everyone and has always been a home to
            those on the fringes of society.
          </p>
          <h6>places of interest: </h6>
          <p>
            <strong>Schwules Museum</strong> - directly translated to "The Gay
            Museum", the building is a museum and research center with
            collections focused intensely on LGBTQ culture and history.
          </p>
          <p>
            <strong>Roses Bar</strong> - a delightfully kitschy bar on the
            ever-popular Oranienstrasse.
          </p>
          <p>
            <strong>Berghain</strong> - technically just outside of Kreuzberg's
            boundaries, Berghain is a mecca for gay and technoculture, and one
            of the most infamous clubs in Europe.
          </p>
          <p>
            <strong>Turkish Market</strong> - a biweekly produce and street food
            market full of Turkish stalls and vendors.
          </p>
          <p>
            <strong>Markthalle Neun</strong> - a street food market representing
            the entire expat spectrum of food within Berlin - an absolute
            foodie's dream!
          </p>

          <p>
            <strong className='title'>Neukölln </strong>
          </p>
          <p>
            Like it's neighbor, Kreuzberg, Neukölln is an alternative and
            international district that a variety of different cultures and
            ethnicities coexist within. Home to diverse creative spaces, vast
            swathes of green areas and parks, more kebab shops and pop up
            restaurants than you could possibly count, and a deeply creative
            collective mindset, Neukölln appeals to everyone, not least of all
            the gay community.
          </p>
          <p>
            If you're looking for a gay neighborhood minus the hustle of city
            life, you're in luck - Neukölln has that too. Rixdorf, a historic
            enclave that was absorbed into the city as Berlin expanded, still
            retains a sleepy, serene village-like feeling, despite its location
            in the heart of Neukölln.
          </p>
          <h6>PLACES OF INTEREST:</h6>
          <p>
            <strong>Klunkerkranich</strong> - rooftop bar perched on the top of
            a shopping mall with sweeping views of the Berlin skyline.
          </p>
          <p>
            <strong>Tempelhofer Feld</strong> - Berlin's outdoor gem,
            Tempelhofer Feld is an old abandoned airport, and now one of the
            city's favorite green spaces.
          </p>
          <p>
            <strong>Schwuz</strong> - One of Berlin's oldest and a firm favorite
            among locals, Schwuz is a gay club that offers a safe space for
            anyone looking to dance themselves into the next day.
          </p>
          <p>
            <strong>Richardplatz</strong> - nestled within the charming
            neighborhood of Rixdorf, Richardplatz the ideal spot for a slow walk
            or a glimpse of Berlin as it once was.
          </p>
          <p>
            <strong>Cell63</strong> - an international art gallery hosting the
            work of artists from all over the world.
          </p>
          <p>
            <strong className='title'>Mitte</strong>
          </p>
          <p>
            Mitte is Berlin's center, the heart of the city that makes the
            surrounding Burroughs seem normal by comparison. While many of the
            older residents have been outpriced due to gentrification, Mitte is
            still home to a number of different LGBTQ bars and businesses,
            absolutely breathtaking architecture, some of Europe's best museums,
            and is overall a wonderful place to live.
          </p>
          <h6>PLACES OF INTEREST:</h6>
          <p>
            <strong>Bar Saint Jean</strong> - a local gay watering hole with a
            diverse range of clientele.
          </p>
          <p>
            <strong>Museum Island</strong> - a series of incredible museums,
            each with their own specific cultural and historical focus.
          </p>
          <p>
            <strong>Ballhaus Berlin</strong> - a hidden gem and throwback to
            Berlin's Weimar era, Ballhaus Berlin makes for a great night of
            unconventional dancing.
          </p>
          <p>
            <strong>Monbijou Park</strong> - a narrow park nestled on the River
            Spree; on summer evenings you can watch couples practice their Latin
            dancing beneath hundreds of different colored lights strung between
            the trees.
          </p>
          <p>
            <strong>Schokoladen</strong> - a bastion of Mitte's gritty
            counterculture, Schokoladen is a music venue that supports up and
            coming musicians, hosting different, often unknown, bands every
            night of the week.
          </p>

          <p>
            <small>Photo by Brian Kyed on Unsplash</small>
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

export default GayAreas
