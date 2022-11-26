import React from "react";
import "./testimonials.css";
import ClientImg_1 from "../../assets/avatar1.jpg";
import ClientImg_2 from "../../assets/avatar2.jpg";
import ClientImg_3 from "../../assets/avatar3.webp";
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
    clientName: "Anne Hathway",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas dolores numquam ducimus unde totam similique culpa sunt eligendi eius, autem, corporis repellat delectus temporibus quidem voluptas voluptatibus cum recusandae ex.",
  },
  {
    avatar: ClientImg_2,
    clientName: "Bob Marley",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas dolores numquam ducimus unde totam similique culpa sunt eligendi eius, autem, corporis repellat delectus temporibus quidem voluptas voluptatibus cum recusandae ex.",
  },
  {
    avatar: ClientImg_3,
    clientName: "Biege Bailey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas dolores numquam ducimus unde totam similique culpa sunt eligendi eius, autem, corporis repellat delectus temporibus quidem voluptas voluptatibus cum recusandae ex.",
  },
  {
    avatar: ClientImg_4,
    clientName: "Hezy Snizer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quas dolores numquam ducimus unde totam similique culpa sunt eligendi eius, autem, corporis repellat delectus temporibus quidem voluptas voluptatibus cum recusandae ex.",
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
