import React from "react";
import "../../css/contentcard.css";
const ContentCard = ({ item }) => {
  return (
    <div className="skills-cards-container">
      {item.map((items, index) => {
        return (
          <div key={index} className="skill-card">
            <h4 className="card-content-about">{items.title}</h4>
            <p>{items.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContentCard;
