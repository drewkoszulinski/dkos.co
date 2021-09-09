import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PortfolioItem from '../components/PortfolioItem'
import Bio from '../components/Bio'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const portfolioItems = [
    {
      title: "Broadnet Teleservices",
      description: "Beginning my contract as a designer and leaving as a frontend developer, my time at Broadnet Teleservices was full of surprises. When I showed up initially, the small team of developers were hastily picking away at the mountain of code to be written that would replace a 20-something year old heap of PHP. After getting the ball rolling by creating the foundational design system, the frontend team looped me in to help bring that design system into reality while an agency's worth of designers would pick up where I left off. the frontend for Broadnet's ground-up product rewrite is built using Angular 10, Tailwind, NodeJs, with some assistance from Storybook.",
      img: "../assets/images/bnts-group.png",
      // navigateTo: "bnts"
    },
    {
      title: "Rayka",
      description: "In my time at Rayka as Head of Design, I wore even more hats than I realized would ever fit on my head. I owned and executed user research & interview projects, feature validation, product strategy, UX/UI design, marketing and email design, and the list goes on. Working within an aggressively competitive space was an outstanding challenge for me as I shaped my understanding of product/market fit. Being forced to look at this space from every imaginable angle, I learned a metric ton about keeping users engaged with utility, not gimmicks. The Rayka mobile app received a 4.7-star rating from 158 users in the iOS App Store.",
      img: "./assets/images/rayka-group.png",
      // navigateTo: "rayka"
    },
    {
      title: "Resume Parse Tool",
      description: "As a contractor at Gigster (2015-2018), many of the projects I worked on were early-stage MVPs, where the client comes to the table with an idea, leaving it up to me to turn their idea into detailed mockups. However, this project was more of a V2 redesign, where we were able to leverage lots of existing data and feedback from the users, as well as design & conduct a fresh set of interviews to drive the next version. And wouldn't you know it—the product received glowing reviews from existing users who previously dreaded using this tool.",
      img: "./assets/images/rr1.jpeg",
    },
    {
      title: "Homecook",
      description: "This was a particularly fascinating idea that the client came to me with, wherein users can browse a mobile, P2P marketplace for selling homecooked meals. Though it's unclear if this sort of product would make it easier or harder for romantic partners to figure out what's for dinner, I was very interested in the idea of taking on a product design that would kick off a relatively unprecedented market. Unsurprisingly, however, the client ran into legal barriers and was unable to launch the product.",
      img: "../assets/images/homecook.png"
    },
    {
      title: "Fix Me Up Fam",
      description: "Fix Me Up Fam is a concept for a roadside assistance app that I came up with during a particularly long stretch of dealing with a failing battery on my camper van. I had recently completed some exciting P2P marketplace projects, and it got me thinking: what if there were an Uber for roadside assistance? Turns out that I wasn't exactly the first to come up with this idea, but either way, I was pretty darn happy with these few screens that I came up with!",
      img: "/assets/images/fix-me-up-fam-new.png"
    },
    {
      title: "Nift at Coolhouse Labs",
      description: "During the 12-week summer cohort of 2015, I had the opportunity to rebuild my entire understanding of UI and UX design while designing real products for real companies. The ultra high-speed environment was perfect for honing my ability to iterate quickly and efficiently, allowing co-founders to prototype, evolve, and uncover product/market fit. My favorite project that summer was Nift, a marketplace product that aimed to provide restaurants and coffee shops extra income by turning their off-hours dining areas into inviting coworking environments.",
      img: "/assets/images/nift-spread.png"
    }
  ]

  return (
    <div>
      <Head>
        <title>dkos.co</title>
      </Head>
      <Navbar/>
      <Hero/>

      <div className="site-container">
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.title}
            title={item.title}
            description={item.description}
            // navigateTo={item.navigateTo}
            image={item.img}>
          </PortfolioItem>
        ))}
      </div>
        <Bio />
        <Footer />
    </div>
  )
}

Home.displayName = 'MyPage'

export default Home