import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import ScrambleText from "../ScrambleText"
import InteractiveMarquee from "../InteractiveMarquee"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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

  const positionVariant = {
    hidden: { x: "100%" },
    visible: {
      x: "60px",
      transition: {
        ease: [0.5, 1, 0.89, 1],
        duration: 1,
        delay: 0,
      },
    },
  }

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section className="about" id="about">
      <BackgroundLines light />
      <div ref={ref} className="about--grid">
        <div className="about--bio">
          <h2>
            <ParaWriting stagger={0.08} text={"I'm a highly motivated software engineer with a strong "} sec={"passion for website development"} />
          </h2>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1.5 }} className="about--title">
          <h3 className="theme--text--dark">
            <ScrambleText shuffle delay={1.5}>
              02
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={1.5}>
              about
            </ScrambleText>
          </h3>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 2 }} onAnimationComplete={() => handleComplete()} className="about--detail">
          <p className="theme--detail--dark">
            <ScrambleText delay={2}>Worked as a Frontend Developer and Support Staff at Frontend Simplified, mentoring aspiring developers in frontend optimization and best practices. 
            Helped improve student portfolios by an average of 50% through personalized support and guidance. 
            Continually expanding skills and knowledge to develop technologies that make a positive impact on society.</ScrambleText>
          </p>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={positionVariant} className="about--marquee">
          <h1 draggable="false">
            <InteractiveMarquee wheelFactor={0} speed={1.3}>
              <span>ABOUT David Birch</span>
              <span>ABOUT David Birch</span>
              <span>ABOUT David Birch</span>
              <span>ABOUT David Birch</span>
              <span>ABOUT David Birch</span>
            </InteractiveMarquee>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
