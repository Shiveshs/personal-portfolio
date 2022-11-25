import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
      <a href='https://github.com' target='blank'><FaGithubSquare/></a>
      <a href='https://instagram.com' target='blank'><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials