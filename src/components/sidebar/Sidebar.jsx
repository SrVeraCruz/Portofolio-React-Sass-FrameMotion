import "./sidebar.scss"

import { useState } from "react"
import { motion } from "framer-motion"

import Links from "./links/Links"
import ToogleButton from "./toogleButton/ToogleButton"

const variants = {
  open: {
    clipPath: "circle(75rem at 3rem 3rem)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 20,
    }
  },
  closed: {
    clipPath: "circle(1.6rem at 3rem 3rem)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleCloseSlideOut = () => {
    setOpen(!open);
    setIsActive(!isActive);
  }

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className={isActive ? "slideOut" : "slideOut active" } onClick={ ()=> handleCloseSlideOut() }></motion.div>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToogleButton setOpen={setOpen} setIsActive={setIsActive} />
    </motion.div>
  )
}

export default Sidebar
