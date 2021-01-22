import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

import MyNavbar from 'components/English/MyNavbar'
import MyFooter from 'components/English/MyFooter'
import BlogHeader from 'components/English/BlogHeader'

const SevenThings = () => {
  const backgroundImage = 'url(' + require('assets/img/seventhings.jpg') + ')'

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
          title='7 Things You Should Know Before Moving to Berlin'
          imageUrl={backgroundImage}
        />
        <div className='section ml-auto mr-auto text-justify col-md-8'>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
          <p>
            It seems that everyone and their mother is moving to Berlin these
            days, and with good reason. As summer approaches it’s hard not to be
            charmed and seduced by the vibe of the city.
          </p>
          <p>
            The many green spaces begin to bloom again, providing space for the
            residents and tourists alike to relax in a way that is almost
            trademarked. Berliners take to the streets in colorful droves,
            outrageous outfits are seen in abundance, as are cheap beers bought
            from late shops which dot the city. Cafes spill out onto the
            sidewalk, and at night the city hums with the energy of a million
            restless revelers, eager to experience the world-famous nightlife
            which Berlin has become synonymous with.
          </p>
          <p>
            It’s intoxicating, to say the least, but it’s not the full picture.
            While the image which Berlin portrays in undoubtedly one of hedonism
            and cultural freedom, there are other things to consider should you
            ever find yourself tempted to move here. And it’s exactly these
            topics which we will address below.
          </p>
          <p>
            <strong>Learning German is really helpful… but difficult</strong>
          </p>
          <p>
            Knowing how to speak German isn’t exactly a strict rule in Berlin,
            but it’s advised. For a start, native speakers will respect you more
            than if you obstinately refuse to learn the tongue of the country
            you’ve relocated to. It will certainly make your life easier when it
            comes to navigating the long and twisted corridors of German
            bureaucracy (more on this later), finding an apartment or sorting
            out a phone contract. That being said, it’s notoriously difficult to
            learn. Between the gendered articles and complex grammar, it takes a
            while to get the hang of. But that doesn’t mean you shouldn’t try.
            Check out this{' '}
            <a
              href='https://www.studying-in-germany.org/learn-german/language-schools/learn-german-berlin/'
              className='btn-link btn btn-warning'>
              list of German schools
            </a>{' '}
            in Berlin if you’re really keen to master the Muttersprache.
          </p>
          <p>
            <strong>
              You won’t earn as much as the rest of Germany, but the cost of
              living is way less
            </strong>
          </p>
          <p>
            With an influx of skilled workers and an abundance of startups,
            salaries in Berlin tend to be at the lower end of the scale,
            especially when compared to other European capitals such as London
            or Paris. The higher numbers of well-educated and trained
            professionals mean there’s higher competition for a finite number of
            positions. However, this isn’t all bad news. While your salary might
            not be as high as other cities in Germany, the cost of living in
            Berlin is still quite a bit lower than say, that of Hamburg or
            Munich. If you’re lucky you can find an old contract, beers still
            cost less than four Euros in a bar, and affordable restaurants
            proliferate the city. So whether you’re working on the next big
            startup within the tech industry or a student working for Deliveroo
            in your spare time, Berlin is still your oyster.
          </p>
          <p>
            <strong>
              Without help, finding a place to stay can be difficult
            </strong>
          </p>
          <p>
            Perhaps the bane of everyone who has ever tried to move to Berlin
            without a plan - finding an apartment (or even just a room) can be
            notoriously difficult. With too many people and not enough
            affordable apartments, Berlin is actually in the midst of a housing
            crisis. That being said, you can always find a place if you look
            hard enough. Perseverance is key, as is the use of pertinent
            websites and resources such as Darna Immobilien’s platform, and with
            a little bit of luck, you’ll be able to find your dream home in no
            time.
          </p>
          <p>
            <strong>Always carry cash</strong>
          </p>
          <p>
            It seems strange to write this in 2019, but in Berlin cash is king.
            Germans have an inherent distrust of banks and credit cards, and so
            prefer to do most day-to-day dealings in cash - so it’s wise to
            carry some of it with you at all times. This includes restaurants,
            trips to small grocery stores and markets of all kinds. While more
            and more parts of Berlin are starting to adopt card payments, you
            often have to pay a minimum or a fee for the privilege. Keep a
            couple of Euros handy with you to avoid unnecessary fees.
          </p>
          <p>
            <strong>Berlin is extremely tolerant</strong>
          </p>
          <p>
            Racists, xenophobes, and homophobes should stop reading now - Berlin
            is an extremely progressive city and welcoming to any and all people
            (except the above-mentioned crowd). It attracts the strangest people
            from all fringes of society, which is what fuels its alternative and
            artistic reputation. There’s something for everyone here, and the
            result is a very welcoming and friendly populace. If you needed
            another reason to move here, this is it.
          </p>
          <p>
            <strong>The party scene can suck you in and spit you out</strong>
          </p>
          <p>
            After the Wall, Berlin might be most famous for its party scene.
            Clubs open at midnight on a Friday and don’t shut until Monday;
            hedonism and debauchery are found in no short supply and techno
            dominates the music scene. It’s a very exciting space to be in, but
            it should be approached with caution. Too often tales are told of
            people who burn out simply because they end up partying too hard and
            too often. While the scene is a fantastic aspect of Berlin, it
            should, like most things in life, be treated with respect and in
            moderation.
          </p>
          <p>
            <strong>Get used to bureaucracy</strong>
          </p>
          <p>
            There is no such thing as straightforward interactions with the
            government in Berlin or Germany for that matter. Everything you
            might need from them involves a long, twisted and tangled maze of
            forms, and hours waiting your turn in queues at government offices.
            It’s an experience in itself and one that you should quickly adjust
            to if you have your hopes set on moving here.
          </p>
          <p><small>Image by Michael Bußmann from Pixabay</small></p>
          <Button color='warning' href='/en/blog'>
            Go Back
          </Button>
        </div>
        <MyFooter />
      </div>
    </>
  )
}

export default SevenThings
