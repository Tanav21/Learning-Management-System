import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { server } from "../../main";
import CourseCard from "../../components/coursecard/CourseCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Home = () => {
  const navigate = useNavigate();
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);

      axios
        .get(`${server}/api/recommendations`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setRecommendedCourses(res.data.recommendations || []);
        })
        .catch((err) => {
          console.error("Failed to fetch recommendations:", err);
        });
    }
  }, [token]);

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* ✅ Swiper for recommended courses */}
      {isLoggedIn && recommendedCourses.length > 0 && (
        <div className="recommended-section">
          <h2>Recommended Courses</h2>
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
        </div>
      )}

      <Testimonials />
    </div>
  );
};

export default Home;
