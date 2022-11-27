import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import "./contact.css";
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44s9ctp', 'template_9psnuad', form.current, 'XZsC0-7VqChqh2VJw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMailOutline className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>shivesh.shandilya1@gmail.com</h5>
          <a href="mailto:shivesh.shandilya1@gmail.com" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Shivesh Shandilya</h5>
          <a href="https://m.me/shandilyaShivesh" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>55555</h5>
          <a href="https://api.whatsapp.com/send?phone=+917008011484" target="_blank">Send a Message</a>
        </article>
      </div>
      {/* End of Conatct Options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder="Your Full Name" required />
        <input type="email" name='email' placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send a Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
