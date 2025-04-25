import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Student",
    message: "This platform is amazing! The courses are well-structured and engaging.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    position: "Educator",
    message: "A fantastic LMS with seamless functionality. My students love it!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    position: "Student",
    message: "The interactive lessons have truly helped me improve my skills.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "Daniel White",
    position: "Instructor",
    message: "Creating and managing courses has never been easier!",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 5,
    name: "Emily Clark",
    position: "Learner",
    message: "A great platform with so many learning opportunities!",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 6,
    name: "James Anderson",
    position: "Student",
    message: "I love how easy it is to track my progress and interact with instructors.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // ✅ Shows 3 testimonials at a time
        loop={true} // ✅ Enables infinite loop
        autoplay={{ delay: 2500, disableOnInteraction: false }} // ✅ Auto-scroll every 2.5s
        navigation // ✅ Show navigation arrows
        pagination={{ clickable: true }} // ✅ Show dots below
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on larger screens
          1440: { slidesPerView: 4 }, // 4 slides on extra-large screens
        }}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <div className="student-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="message">{testimonial.message}</p>
              <div className="info">
                <p className="name">{testimonial.name}</p>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
