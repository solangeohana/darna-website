import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const SeeAndFeel = () => {
  const backgroundImage = 'url(' + require('assets/img/see&feel.jpg') + ')'

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
          title='Things You Can Only See and Feel in Berlin'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            <strong>
              There’s something very unique about living in Berlin.
            </strong>
          </p>
          <p>
            It’s a feeling that only residents can define, but anyone who has
            ever walked its streets will have felt in some form or another. It’s
            a feeling of wonder, of life, of possibility. And it’s different for
            every kiez. No two districts are the same, nor do they try to be.
            The people who reside in Berlin, who have chosen this city as their
            home, are aware of these idiosyncrasies and how quickly they can
            change from one street to the next. It’s a sense of Berliness, one
            that they both feel and contribute to. Because Berlin is its people
            as much as it is its buildings, its parks, its history, and its
            culture. It’s a feeling unique to here, and it exists in many
            different forms.
          </p>
          <p>
            <strong>The Joining of Past and Present in Mitte</strong>
          </p>
          <p>
            Strolling through Berlin’s center, it’s hard not to be awe of the
            way that two distinct sides of history seem to have merged. The
            relics of communism and everything that came before it can still be
            seen and felt in the form of the TV Tower, the Berliner Dom, the
            Reichstag, and the Brandenburg Gate, not to mention the thousands of
            rebuilt, post-war apartment buildings. These occupy the same space
            as modern architecture such as the Sony Center, Potsdamer Platz and
            the new housing developments which have since filled the gaps left
            by the indiscriminate bombing during the Battle of Berlin.
          </p>
          <p>
            The feelings of Berlin’s troubled albeit fascinating past can still
            be felt in many places, but so can the excitement of development and
            progress. Walk into Hackesche Höfe, for example, and your breath
            will be taken away by interconnected art nouveau courtyards home to
            bustling cafes, cinemas, and small galleries, while the alleyway
            adjacent is a living testament to the alternative subcultures which
            developed and thrived during the reign of the GDR. It’s a strange
            temporal contrast, but it’s evident in many spaces through Berlin’s
            center.
          </p>
          <p>
            <strong>Unbridled Creativity in Kreuzberg</strong>
          </p>
          <p>
            Cheap rents and costs of living meant that many artists, immigrants,
            bohemians and a sizeable gay community flocked to Kreuzberg in the
            early 90s. The result of this influx was a neighborhood bursting at
            the seams with creativity even in the face of near poverty. That
            creativity is still felt everywhere in Kreuzberg today. It’s in
            every haphazardly set up cafe, broken bottle on the street, in the
            very air itself. And while the cost of rent has risen, Kreuzberg has
            still retained its reputation for being a creative powerhouse, and
            so draws the same eclectic crowd.
          </p>
          <p>
            <strong>Charm, Elegance, and Refinement in Charlottenburg</strong>
          </p>
          <p>
            Traveling to Charlottenburg can often feel like traveling to another
            city. For all of Berlin’s strangeness, Charlottenburg is a bastion
            of normalcy. More than that, it’s a place of wealth, elegance and
            refinement. Between the shopping boulevard of Kurfürstendamm, the
            Charlottenburg Palace and Park, the Deutsche Oper and the luxurious
            department store KaDeWe, it can sometimes feel as though you’re
            living in an upmarket borough of Paris or New York. It shows in the
            buildings, the architecture and the residents themselves. Nowhere
            else in Berlin feels as developed or as affluent.
          </p>
          <p>
            <strong>A World’s Worth of Cultures in Neukölln</strong>
          </p>
          <p>
            The term “cultural melting pot” is as good as any to describe
            Neukölln, although you probably won’t find many residents using it.
            But the fact of its diversity is evident as soon as you step foot in
            its streets. Home to countless doner shops, shisha lounges and vegan
            cafes, the district is home to immigrants, students and bougie
            artists from all corners of the world. There’s an undeniable
            influence of a hundred distinctive cultures, and it's felt in every
            restaurant, corner shop, and bar. Fifteen years ago Neukölln may
            have felt abandoned, or even forgotten. Today, however, there’s a
            feeling of a rough yet powerful rejuvenation, a testament to the
            residents who provide precious vitality to the kiez.
          </p>
          <p>
            <strong>The Most Authentic Thai Food in Wilmersdorf</strong>
          </p>
          <p>
            It’s a semi-well kept secret, but Berlin has some of the best Thai
            food in Europe. And no, it’s not a contemporary fusion restaurant
            blending pan Asian flavors to amaze diners (although those places do
            exist). Instead, it’s a small, slightly illegal gathering of Thai
            locals who get together every Sunday in Preußenpark to sell a host
            of extremely authentic Thai dishes. It’s a local gem which draws in
            both tourists and residents and not something you’d expect to find
            in the center of a German city.
          </p>
          <p>A Beach Holiday In The Middle Of A City in Wannsee</p>
          <p>
            Living in the center of a big city during summer, it’s easy to
            fantasize about stealing off to the coast for a weekend at the
            beach. For Berliners, this is no mere dream and something which
            people take advantage of during the week as well as on weekends.
          </p>
          <p>
            The western district of Wannsee exists sandwiched in between two
            lakes - the larger Großer Wannsee and the smaller Kleiner Wannsee -
            both of which contain long, bone-white beaches. It’s one of the
            hottest spots during summer and has been popular among Berliners for
            over 100 years.
          </p>
          <p>
            Being there, walking along the promenade, past cafes, beach
            umbrellas, and beachgoers eating ice cream and drinking beer, it
            feels as though you could be on the Baltic Coast, or maybe somewhere
            in the Mediterranean. It feels like a beach holiday in the middle of
            the city. And while it’s not quite the ocean, it’s so close that you
            can barely tell the difference.
          </p>
          <p><small>Image by Sylla from Pixabay</small></p>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default SeeAndFeel
