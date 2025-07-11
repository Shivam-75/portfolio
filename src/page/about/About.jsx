import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../css/about.css";
import SectionWrapper from "../../components/scrol/SectionWraper";
import ContentCard from "../../components/card/ContentCard";
import { item } from "../../store/item";
import { prcentageCard } from "../../store/percentage";
import Percentage from "../../components/card/Percentage";
import Socialmedia from "../../components/socialmedia/Socialmedia";

const About = () => {
  return (
    <div className="about-container">
      <SectionWrapper>
        <h1 className="about-title">About Me</h1>
      </SectionWrapper>

      <SectionWrapper>
        <p className="about-description">
          Hello! I'm a passionate <strong>Web Developer</strong> currently Study
          in <strong>BCA</strong>. I specialize in building responsive and
          modern web applications using
          <strong> HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>React.js</strong>. On the
          backend, I work with <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, <strong>MongoDB</strong>, and
          <strong>MySQL</strong>. I'm also currently learning{" "}
          <strong>React Native</strong> to build mobile apps.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h3>💻 Skills & Technologies</h3>
        <ContentCard item={item} />
      </SectionWrapper>
      <div className="border-about" />
      <br />

      <SectionWrapper>
        <h3>🎯 Goals</h3>
        <p>
          My short-term goal is to become a full-stack developer and contribute
          to real-world projects. Long-term, I want to lead development teams
          and work on innovative digital solutions.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h3>🧠 Learning Philosophy</h3>
        <p>
          I believe in learning by doing — building projects, solving real
          problems, and staying active in the tech community. I'm always curious
          to learn new tools, frameworks, and best practices.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h3>🌐 Let's Connect</h3>
        <p>
          You can find me on GitHub and LinkedIn. I’m always open to
          collaboration, freelancing, and tech talks.
        </p>
      </SectionWrapper>
      <div className="border-about" />
      <SectionWrapper>
        <Percentage item={prcentageCard} />
      </SectionWrapper>
    </div>
  );
};

export default About;
