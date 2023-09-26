import React from "react";
import "./About.styles.scss"; // Import your About component styles

function About() {
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
        felis dolor. Vestibulum eget justo eget elit feugiat euismod. Fusce
        bibendum facilisis tellus, eu congue erat faucibus sed. Cras nec risus
        in libero efficitur dignissim. Curabitur ac arcu non leo efficitur
        consequat. Nam commodo mi sit amet massa tristique, non hendrerit urna
        lacinia.
      </p>
      <p className="about-description">
        Phasellus vitae leo ipsum. Praesent id felis nec mi varius blandit.
        Nullam eget nulla metus. Fusce ut ex vel turpis scelerisque hendrerit eu
        id tellus. Suspendisse potenti. Vivamus vehicula, urna eu efficitur
        lacinia, ex augue fermentum metus, vel dapibus mi sapien vel libero.
        Nulla facilisi.
      </p>
      <p className="about-description">
        Integer et volutpat libero. Fusce vehicula velit nec sem tincidunt, id
        venenatis dui scelerisque. Sed ullamcorper, tortor eget cursus
        tincidunt, urna libero interdum lectus, non consectetur quam metus quis
        eros.
      </p>
    </div>
  );
}

export default About;
