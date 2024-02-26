import "./services.scss"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}

const Services = () => {

  const ref = useRef()

  const isInView = useInView(ref, { margin: "50px" })

  return (
    <div className="services" ref={ ref } >
      <motion.div 
        className="sevicesBox" 
        variants={variants} 
        initial="initial" 
        animate={ isInView && "animate" }
      >
        <motion.div className="textContainer" variants={variants} >
          <p>I focus on helping your brand grow and move forward</p>
          <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
          <motion.div className="title" variants={variants} >
            <img src="./people.webp" alt="people" />
            <h1><b>Unique</b> Ideas</h1>
          </motion.div>
          <motion.div className="title" variants={variants} >
            <h1><b>For your</b> Business.</h1>
            <button>WHAT WE DO?</button>
          </motion.div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe facilis,
              tenetur ut veniam, cupiditate nesciunt illo nobis cumque id perspiciatis.
            </p>
            <button>Go</button>
          </div>
          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe facilis,
              tenetur ut veniam, cupiditate nesciunt illo nobis cumque id perspiciatis.
            </p>
            <button>Go</button>
          </div>
          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe facilis,
              tenetur ut veniam, cupiditate nesciunt illo nobis cumque id perspiciatis.
            </p>
            <button>Go</button>
          </div>
          <div className="box">
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe facilis,
              tenetur ut veniam, cupiditate nesciunt illo nobis cumque id perspiciatis.
            </p>
            <button>Go</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services
