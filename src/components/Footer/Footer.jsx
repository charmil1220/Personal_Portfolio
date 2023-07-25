import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { FiTwitter } from "react-icons/fi";
import { GrFacebookOption,GrGithub } from "react-icons/gr";
import{BsInstagram} from "react-icons/bs";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Let's work together And <br/> i'll help you by all my best
          </span>
          <span className="primaryText">
            Start by <a href="mailto:malcharmil@gmail.com">saying hi</a>
          </span>
          <span>  Developed by Me © 2023 </span>
        </div>

        

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Ahemdabad, Gujarat</p>
          </div>
          <ul className={css.menu}>
            <li><BsInstagram  size={"40px"}/></li> 
            <li><GrFacebookOption size={"40px"}/></li>
            <li><FiTwitter size={"40px"} /></li>
            <li><GrGithub size={"40px"}/></li>
          </ul>
        </div>
        
      </motion.div>
    </motion.section>
    
  );
};

export default Footer;
