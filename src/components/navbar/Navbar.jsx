import "./navbar.scss"

import {motion} from "framer-motion"

import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className='navbar'>
      {/*Sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration: 0.5}}
        >Lama Dev</motion.span>
        <div className="socials">
          <a href="#"><img src="./facebook.png" alt="facebook-logo" /></a>
          <a href="#"><img src="./instagram.png" alt="facebook-logo" /></a>
          <a href="#"><img src="./youtube.png" alt="facebook-logo" /></a>
          <a href="#"><img src="./dribbble.png" alt="facebook-logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;