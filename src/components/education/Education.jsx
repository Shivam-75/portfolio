import React from "react";
import "../../css/eduction.css";
import { MdEditLocation } from "react-icons/md";
const Education = () => {
    const eduction = [
        {
          batch: "2020-2022",
          cource: "Senior Secondary (Class 12)",
          college: "SKSD Public School ",
          content: "Participated in coding competitions and science exhibitions.",
          study:
            "Projects",
          study2:"Coding ",
        },
      {
        batch: "2023-2026",
        cource: "Bachelor of Computer Applications",
        college: "ITM College of Management, GIDA, Gorakhpur",
        content: "Specialized in web development and software engineering.",
        study: "Data Structures & Algorithms",
        study2: "Web Development",
      },
    ];
  return (
    <div className="eduaction-border">
      <h1>Education</h1>
      <div className="eduction-flex">
        {eduction.map((item, index) => (
          <div key={index} className="eductiondata">
            <p className="button-date">{item.batch}</p>
            <p className="education-title">{item.cource}</p>
            <p className="education-clg">{item.college}</p>
            <p className="eduction-ss">{item.content}</p>
            <ul className="study">
              <li className="button-sub">{item?.study}</li>
              <li className="button-sub">{item?.study2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
