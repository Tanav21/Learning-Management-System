import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "./CourseCard"; // Make sure this path is correct

import "./recommendedCourses.css"; // Optional: create styling for the carousel

const RecommendedCourses = ({ recommendedCourses }) => {
  return (
    <section className="recommended-section">
      <h2>Recommended Courses</h2>
      {recommendedCourses && recommendedCourses.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {recommendedCourses.map((course) => (
            <SwiperSlide key={course._id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No Courses Yet!</p>
      )}
    </section>
  );
};

export default RecommendedCourses;
