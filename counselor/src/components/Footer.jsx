import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time:  "10:00 AM - 10:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "04:00 PM - 10:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "10:00 AM - 10:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
          <Link to={"/"} onClick={() => setShow(!show)}>
            <img src="/logo.png" alt="logo" className="logo-img"/>
            </Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/test"} onClick={() => setShow(!show)}>
              Take Test
            </Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>123-456-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>carrer@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
