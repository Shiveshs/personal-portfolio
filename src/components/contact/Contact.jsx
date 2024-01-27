import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import data from "./contactData.json";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44s9ctp",
        "template_9psnuad",
        form.current,
        "XZsC0-7VqChqh2VJw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{data.properties.pageTitle.properties.h5}</h5>
      <h2>{data.properties.pageTitle.properties.h2}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {data.properties.subtitles.properties.map((property, index) => {
            return (
              <article
                key={property.subtitle + index}
                className="contact__option"
              >
                <MdOutlineMailOutline className="contact__option-icon" />
                <h4>{property.subtitle}</h4>
                <h5>{property.details}</h5>
                <a href="mailto:shivesh.shandilya1@gmail.com" target="_blank">
                  {property.link}
                </a>
              </article>
            );
          })}
        </div>
        {/* End of Conatct Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {data.properties.link.properties.link}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
