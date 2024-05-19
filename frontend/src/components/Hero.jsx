import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          The AI-Based Education Recommendation System revolutionizes the education sector by addressing the limitations of existing platforms.
           Unlike traditional solutions, it offers personalized career guidance, real-time market insights, and skill development recommendations. 
           By leveraging advanced AI algorithms, it stands as an innovative and independent platform, empowering students to make informed decisions about their education and career paths.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
