import React from "react";
import Hero from "../components/Hero";
import AppointmentList from "../components/AppointmentList";

const Appointment = () => {
  return (
    <>
      <Hero
        title={" Appointment"}
        imageUrl={"/signin.png"}
      />
      <div>
      <AppointmentList/>

      </div>
    </>
  );
};

export default Appointment;
