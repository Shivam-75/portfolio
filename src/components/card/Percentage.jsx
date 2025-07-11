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
                    <div className="ssbv">
                      <span>{itemssdt.title}</span> <span>{itemssdt.pt}%</span>
                    </div>{" "}
                    <progress value={itemssdt.pt} max="100" />
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
