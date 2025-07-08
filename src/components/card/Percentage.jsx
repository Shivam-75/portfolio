import React from "react";
import "../../css/percentage.css";
import { motion } from "framer-motion";
import SectionWrapper from "../scrol/SectionWraper";

const Percentage = ({ item }) => {
    return (
      <SectionWrapper>
        {" "}
        <div className="progresh-card">
          {item.map((itemdata, index) => (
            <div className="progres-box" key={index}>
              <h1 className="progress-dts">{itemdata.titles}</h1>
              <div className="progress-bar-card">
                {itemdata.data.map((itemssdt, subIndex) => (
                  <div className="sole" key={subIndex}>
                    <span>{itemssdt.title}</span>
                    <progress value={itemssdt.pt} max="100" />
                    <span>{itemssdt.pt}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
};

export default Percentage;
