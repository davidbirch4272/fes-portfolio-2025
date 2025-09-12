import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work3.png"
import work4 from "../../assets/Images/work4.png"
import work5 from "../../assets/Images/work5.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Skinstric",
      year: "2025",
      img: work1,  
      title: "A Skin Care Website With The Latest A.I. Technologies.",
      detail: "Created a website that takes information from the user, including name, city and a photograph by selecting a file or by use of the camera and uploads these items to the API which then responds with demographic information.",
      link:  "https://skinstric-drab.vercel.app/"
    },
    {
      client: "Personal Project",
      year: "2025",
      img: work2,
      title: "An NFT Display Platform Website.",
      detail: "Transformed a static NFT platform into a dynamic platform with details of users, cost, likes and more.",
      link:  "https://davidbirch-internship.vercel.app/"
    },
    {
      client: "Personal Project",
      year: "2025",
      img: work3,
      title: "A Custom Designed Website for Movies.",
      detail: "Created a website for movies using an api with search bar and sorting capabilities.",
      link:  "https://movies-react-style.vercel.app/"    
    },
  {
      client: "Personal Project",
      year: "2025",
      img: work4,
      title: "A Clone of the Popular Platform Netflix.",
      detail: "Created a Netflix Clone with functional sign in & out and subscription capabilities.",
      link:  "https://a-certain-movie-platform.vercel.app/"    
    },  
{
      client: "Personal Project",
      year: "2025",
      img: work5,
      title: "My Band Called Deathie",
      detail: "Created a Website for the band with functional checkout features for buying CD's.",
      link:  "https://deathie.com/"    
    },  



  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
