import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/shivesh-shandilya-9b4b6170/' target='blank'><BsLinkedin/></a>
      <a href='https://github.com/Shiveshs' target='blank'><FaGithubSquare/></a>
      <a href='https://www.instagram.com/shandilya_mobile_photography/' target='blank'><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials