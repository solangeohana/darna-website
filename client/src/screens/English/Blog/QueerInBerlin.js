import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const QueerInBerlin = () => {
  const backgroundImage = 'url(' + require('assets/img/queerberlin.jpg') + ')'

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
          title='What To Expect As A Queer Person Moving To Berlin'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            You’ve traveled to Berlin for a weekend. You’ve covered the walking
            tour, seen everything Alexanderplatz has to offer, fallen in love
            with the cheap beer and the extravagant people you see in the parks
            and on the U-bahn. On your way home to whatever city you live in you
            start thinking, “maybe I could live there…”
          </p>
          <p>
            It’s not long before these frivolous thoughts start becoming serious
            considerations. After all, Berlin is meant to be the city for
            everyone, especially the queer community, and you’re someone queer,
            so why not?
          </p>
          <p>You make a decision, find conviction… And then the fear comes.</p>
          <p>
            It’s not unreasonable - moving to a new city can be a scary
            experience at the best of times, which is why it helps to forearm
            yourself with as much information as possible before you take that
            leap of faith and buy your one-way ticket to Schönefeld Airport.
          </p>
          <p>
            We’re way ahead of you. As part one of our “Queer Guide to Finding A
            Place to Live in Berlin”, we’ll equip you with the knowledge and
            information regarding everything you can expect from moving to
            Berlin as a queer person. The first point worth mentioning -
          </p>
          <p>
            <strong>You will find tolerance and acceptance.</strong>
          </p>
          <p>
            And that’s because Berlin is one of the most accepting and tolerant
            cities in the world. While discrimination certainly exists and can
            be found and experienced in Berlin - just as in any other city - the
            majority of Berliners really don’t care about your sexual
            orientation. Who you love or how you present yourself is your own
            business and most people respect that, which means you can live your
            life in whatever fashion you want without feeling like an outsider.
            If you feel the need to wear ten-inch heels, cover yourself in
            rainbow glitter, dress in drag while listening to “Dancing Queen” as
            you do your shopping, no one is going to stop you.
          </p>
          <p>
            <strong>
              There are a ton of gay-friendly neighborhoods (and not just
              Schöneberg).
            </strong>
          </p>
          <p>
            While Schöneberg definitely tops the list as the most historic and
            popular gay neighborhood within Berlin, it’s not the only one. In
            fact, the entire city is home to numerous neighborhoods that are
            full to the brim with gay singles, couples, families, and
            queer-owned businesses. From Prenzlauer Berg in the north, to
            Kreuzberg in the East and Mitte directly in the middle, you’ll have
            no shortage of districts to choose from when you go house hunting.
          </p>
          <p>
            <strong>
              Berlin has one of the biggest (and, we think, best) Pride
              celebrations in the world.
            </strong>
          </p>
          <p>
            Pride - the annual celebration of everything and anything LGBT+ - is
            a day more sacred than Christmas in Berlin. Here it’s called
            Christopher Street Day and takes place in the second half of July
            each year. While the day itself is one serious party, it’s also a
            continued demonstration and demand for equal rights for the LGBT+
            community.
          </p>
          <p>
            Expect numerous, city-wide celebrations leading up to the actual
            parade, as well as countless afterparties to keep post-Pride
            revelers satiated. The CDS parade itself makes its way through the
            center of Berlin - a seemingly endless procession of party floats
            followed by a retinue of party-goers wearing elaborate costumes (or
            no costumes at all), queens and kings of all descriptions,
            fetishists clad heel to toe in leather, cheerful families, and a
            peaceful police presence.
          </p>
          <p>
            <strong>You’ll have access to a wealth of LGBT+ resources</strong>
          </p>
          <p>
            As a queer person living in Berlin, you’ll have almost limitless
            access to LGBT+ organizations who can provide both support and
            information. A testament to the city’s tolerance, Berlin provides
            services such as the{' '}
            <a
              href='https://berlin.lsvd.de/'
              className='btn-link btn-warning'>
              LSVD (Lesbian and Gay Association for Berlin and Brandenburg)
            </a>{' '}
            which offers a wealth of advice and different services, or the
            <a
              href='http://lesbenberatung-berlin.de/Willkommen.html'
              className='btn-link btn-warning'>
              Lesbenberatung
            </a>{' '}
            which offer one-on-one advice and counseling sessions for lesbian,
            bisexual and transgender women.
          </p>
          <p>
            Likewise, there are a number of different queer-only services
            platform which will help you get in contact with and integrate into
            the queer community. For a full list of resources, check out Part 7
            of Darna’s Queer Moving Guide.
          </p>
          <p>
            <strong>
              You’ll be shocked at the number of businesses that serve the LGBT+
              community
            </strong>
          </p>
          <p>
            If you’ve ever been denied service simply for being gay, bi, trans
            or anywhere in between, rejoice! The number of gay-owned businesses
            in Berlin is absolutely staggering, and within that community,
            you’ll find anything and everything you could possibly need. From
            gay tours to hotels, cafes like Romeo und Romeo to queer real estate
            companies (well, just one), Berlin has a diverse queer business base
            ready to serve the community without judgment or discrimination.
            Another interesting place in Berlin for the Professional Queer
            Community is Darna’s Queer Coworking Space, where one can establish
            great international connections in the queer community, empower one
            another and interact in many interesting queer projects that take
            part in Germany and worldwide.
          </p>
          <p>
            <strong>And then of course there’s the queer nightlife</strong>
          </p>
          <p>
            It’s hard to talk about Berlin without mention of its hedonist
            nightlife creeping in, and indeed it is one of the selling points.
            With countless queer bars, clubs, restaurants and other events, the
            queer nightlife in Berlin is a thriving scene consisting of
            like-minded individuals all looking to have fun. Whether you’d like
            a relaxed night sipping cocktails at an upmarket bar, want to dance
            until the sun comes up at a club like SchwuZ, or would like to
            explore the more devious avenues of Berlin’s party culture, you’ll
            have no trouble finding a safe and accepting space to do so.
          </p>
          <p>
            <strong>
              And just the breadth of queer cultural events will be unlike any
              other city you’ve ever been to
            </strong>
          </p>
          <p>
            Nightlife aside, the sheer size of Berlin’s queer cultural scene is
            hard to comprehend. Here queer culture is not just celebrated, it’s
            discussed and reflected upon.
          </p>
          <p>
            Cinema lovers can attend one of Berlin’s most iconic cinemas and
            catch late night gay and lesbian films as part of Kino
            International’s MonGay program every Monday night. The{' '}
            <a
              href='https://www.schwulesmuseum.de/ausstellungen/?lang=en'
              className='btn-link btn-warning'>
              Schwules Museum{' '}
            </a>
            (or Gay Museum) has both permanent and rotating exhibitions that
            explore LGBT+ culture and ideas. And there are countless LGBT+ think
            tanks, events, galleries, and exhibitions happening every night and
            day of the week.
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

export default QueerInBerlin
