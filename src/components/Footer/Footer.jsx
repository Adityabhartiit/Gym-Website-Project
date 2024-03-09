import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
<div className="Footer container">
  <hr/>
  <div className="footer">
    <div className="social-links">
  <a href="https://github.com/Adityabhartiit">
  <img src={Github} alt="" /></a>
  <a href="https://leetcode.com/Adityabharti_it/">
  <img src={Instagram} alt="" /></a>
  <a href="https://www.linkedin.com/in/aditya-bharti-23890b231/">
  <img src={LinkedIn} alt="" /></a></div>
  <div className="logo-f">
    <img src={Logo} alt=""/>
  </div>

    </div>
    
    
</div>
  )
}

export default Footer
