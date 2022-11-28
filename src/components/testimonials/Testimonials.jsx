import React from "react";
import "./testimonials.css";
import ClientImg_1 from "../../assets/renuka.jpg";
import ClientImg_2 from "../../assets/bikas.jpg";
import ClientImg_3 from "../../assets/laxmi.jpg";
import ClientImg_4 from "../../assets/avatar4.jpg";

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
  // {
  //   avatar: ClientImg_4,
  //   clientName: "Hezy Snizer",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas dolores numquam ducimus unde totam similique culpa sunt eligendi eius, autem, corporis repellat delectus temporibus quidem voluptas voluptatibus cum recusandae ex.",
  // },
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
      >
        {data.map(({ avatar, clientName, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
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
