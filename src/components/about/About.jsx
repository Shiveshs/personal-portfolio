import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <h5>Get to Know</h5>
      <div className='container about__container'>
        <div className="about__me">
          <img src={ME} alt='About Image'/>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 + Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide Years</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus inventore fugiat a rerum fuga mollitia, nam natus consequuntur. Suscipit quasi sint sunt? Ex, dignissimos minima et repellendus cum eum!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About