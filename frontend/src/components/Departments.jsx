import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "O level Counseling",
      imageUrl: "/departments/olevel.png",
    },
    {
      name: "A level Counseling",
      imageUrl: "/departments/Alevel.png",
    },
    {
      name: "Matric level Counseling",
      imageUrl: "/departments/matric.jpeg",
    },
    {
      name: "Fsc Pre-Medical Counseling",
      imageUrl: "/departments/fscmedical.jpeg",
    },
    {
      name: "Fsc Pre-Engineering Counseling",
      imageUrl: "/departments/fscengineering.jpeg",
    },
    {
      name: "ICS Counseling ",
      imageUrl: "/departments/ics.png",
    },
    {
      name: "Matric Arts  Counseling",
      imageUrl: "/departments/matricarts.png",
    },
    {
      name: "F.A Counseling",
      imageUrl: "/departments/fa.jpeg",
    },
    {
      name: "Bachelors level Counseling",
      imageUrl: "/departments/bachelors.jpeg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
