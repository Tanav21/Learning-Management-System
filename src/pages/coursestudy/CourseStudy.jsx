import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();

  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={250} />
          <h2>{course.title}</h2>
          <div className="about">
                <div className="about-content">
                  <h2 className="heading">Course Description</h2>
                  <p className="para">
                    <div
                      className="content"
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{ __html: course.description }}
                    ></div>
                  </p>
                </div>
              </div>
          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;