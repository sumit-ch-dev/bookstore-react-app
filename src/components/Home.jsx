import React from "react";
import "./Home.styles.scss"; // Import your Home component styles

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to our Test Website</h1>
      <p className="home__description">
        This is a test home page for demonstration purposes. You can customize
        and style it as needed for your project.
      </p>
      <button className="home__button">Get Started</button>
    </div>
  );
}

export default Home;
