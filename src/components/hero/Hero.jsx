import { motion } from "framer-motion"

import "./hero.scss"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 50,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" 
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>Vera Cruz Dúdú</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer Full-Stack</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroll" />
        </motion.div>
      </div>
      <motion.div className="slideTextContainer" 
        variants={ sliderVariants } 
        initial="initial" 
        animate="animate"
      >
        The best version of my self...
      </motion.div>
      <div className="imageContainer">
        <img src="./hero2.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero;