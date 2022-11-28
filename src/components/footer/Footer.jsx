import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shivesh</a>
      <ul className='permalinks'>
        <li> <a href="#"></a> </li>
        <li> <a href="#about"> About </a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#contact"> Contact </a> </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/shivesh.shandilya" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/shandilya_mobile_photography/" target="_blank"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/shivesh-shandilya-9b4b6170/" target="_blank"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; Shivesh Shandilya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer