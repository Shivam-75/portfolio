import React from "react";
import "../../css/card.css";
import SectionWrapper from "../scrol/SectionWraper";
const Card = ({ item }) => {
  return (
    <>
      
        {item.map((item, index) => {
          return (
            <SectionWrapper>
              <div key={index} className="card">
                <div className="card-img">
                  <div className="card-img-img">{item?.img}</div>
                </div>
                <h1 className="card-h1">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </SectionWrapper>
          );
        })}
    </>
  );
};

export default Card;
