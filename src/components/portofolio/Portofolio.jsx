import "./portofolio.scss"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
  {
    id:1,
    title:"React Commerce",
    img:"./people.webp",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempora minus tenetur quidem eveniet odio voluptates vero?"
  },
  {
    id:2,
    title:"React form",
    img:"/people.webp",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempora minus tenetur quidem eveniet odio voluptates vero?"
  },
  {
    id:3,
    title:"Est-Fes",
    img:"/people.webp",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempora minus tenetur quidem eveniet odio voluptates vero?"
  },
  {
    id:4,
    title:"React form",
    img:"/people.webp",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis tempora minus tenetur quidem eveniet odio voluptates vero?"
  },
]

const Single = ({item}) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target:ref,
    //offset: ["end end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0,1], [-300,300])

  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>  
  )
}

const Portofolio = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["end end", "start start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className="portofolio" ref={ref}> 
      <div className="progress">
        <motion.div className="progressBar" style={{scaleX}}></motion.div>
        <h2>Featured Works</h2>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portofolio;