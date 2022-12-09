import React from "react";
import "./testimonials.css";
import ClientImg_1 from "../../assets/renuka.jpg";
import ClientImg_2 from "../../assets/bikas.jpg";
import ClientImg_3 from "../../assets/laxmi.jpg";
import ClientImg_4 from "../../assets/avatar4.jpg";
import femaleAvatar from "../../assets/femaleAvatar.png"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// const pagination = {
//   clickable: true,
//   renderBullet: function (index, className) {
//     return '<span class="' + className + '">' + (index + 1) + "</span>";
//   },
// };

const data = [
  {
    avatar: ClientImg_1,
    clientName: "Renuka Komajpillewar",
    review:
      "Shivesh has always been meticulous in learning new skills and has always showed a persistent attitude in solving problems.",
  },
  {
    avatar: ClientImg_2,
    clientName: "Bikas C Mahata",
    review:
      "Shivesh is someone who you can rely on. He won't rest until he has delivered the best that he can. He shows a great attitude to lear and grow.",
  },
  {
    avatar: ClientImg_3,
    clientName: "Laxmi Rout",
    review:
      "Working with Shivesh will make you feel enthusiastic about the work, no matter how tough the timeline is. He is someone who comes up with out of the box ideas at the oddest hours and solves the problem.",
  },
  {
    avatar: femaleAvatar,
    clientName: "Afreen Shakeer",
    review:
      "Shivesh did an exceptional job on recent projects. As I remember, he was a very productive person and is a multi-skilled person with vast knowledge. He is careful, proactive, self motivated and intelligent team player. It’s a pleasure working with him as he is a customer-service oriented colleague. Thanks to interpersonal skills, he has great relations with both company clients and potential customers.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={40}
      >
        {data.map(({ avatar, clientName, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="ClientImg_1" />
              </div>
              <h5 className="client__name">{clientName}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
