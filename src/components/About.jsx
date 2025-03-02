import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="text-white pt-24">
      <div className="font-bold text-[35px]">What is Mechanistic Interpretation?</div>
      <div className="pt-10 text-[18px]">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet tempor vehicula leo mauris semper dolor. Varius gravida urna ultrices lacus dictum feugiat ornare imperdiet. Laoreet vel platea purus; pretium in in a quis. Per tincidunt maximus inceptos consectetur magnis dignissim. Ante vivamus magna blandit tempor senectus ex iaculis. Iaculis mollis nam hac fermentum magnis lobortis leo. Quisque id phasellus sodales vulputate malesuada tortor platea elementum sed?
      </div>
    </div>
  );
};

export default About;