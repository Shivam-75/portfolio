import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../css/about.css";
import SectionWrapper from "../../components/scrol/SectionWraper";
import ContentCard from "../../components/card/ContentCard";
import { item } from "../../store/item";
import { prcentageCard } from "../../store/percentage";
import Socialmedia from "../../components/socialmedia/Socialmedia";
import AboutContents from "../../components/aboutcontent/AboutContents";
import Education from "../../components/education/Education";

const About = () => {
  return (
    <div className="about-container">
      <AboutContents />
      <div className="border-about" />
      <SectionWrapper>
        <Education />
      </SectionWrapper>
    </div>
  );
};

export default About;
