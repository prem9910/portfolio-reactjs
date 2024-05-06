import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Advanced Diploma in IT, Networking, and Cloud Computing (ADIT)"
            date="2022 — Present"
            description="Currently enrolled in the Advanced Diploma in IT, Networking, and Cloud Computing course under IBM and DGT. Gaining expertise in cutting-edge technologies and preparing for a career in the field."
          />
          <TimelineItem
            title="Diploma in Computer Science and Engineering"
            date="2018 — 2021"
            description="Completed my Diploma in Computer Science and Engineering, gaining valuable knowledge and practical skills in the field."
          />

          <TimelineItem
            title="Completed Higher Secondary Certificate with Science Stream"
            date="2017 — 2018"
            description="Completed my Higher Secondary Certificate with a focus on science, laying the groundwork for future academic and professional endeavors."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          
<TimelineItem
title="Freelance Web Designer & WordPress Developer"
date="2019 — 2022"
description="As a freelancer, I specialize in web design and WordPress development, collaborating with various project clients to deliver tailored solutions. Utilizing my expertise, I craft visually appealing websites and customize WordPress platforms to meet client needs."
/>
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="ReactJS" value={90} />
          <SkillItem title="WordPress" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
