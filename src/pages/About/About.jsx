/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    "title": "Web design",
    "icon": "/images/icon-design.svg",
    "description": "The most modern and high-quality design made at a professional level."
  },
  {
    "title": "UI/UX Design",
    "icon": "/images/icon-design.svg",
    "description": "Crafting user-centric and aesthetically pleasing interfaces for optimal user experience."
  },
  {
    "title": "Web development",
    "icon": "/images/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
 
  {
    "title": "Graphic Design",
    "icon": "/images/icon-design.svg",
    "description": "Designing visually compelling graphics for various digital and print mediums."
  }
  
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I am a dedicated web developer focused on expanding my skills within the realm of ReactJS-based projects. With a keen interest in front-end development, I continuously strive to deepen my understanding and proficiency in crafting dynamic and responsive user interfaces. Through hands-on experience and ongoing learning, I am adept at leveraging the latest tools and techniques to create engaging web applications that meet the evolving needs of users.
      </p>
      <p>
        In addition to my expertise in ReactJS, I possess a solid understanding of backend development principles. This enables me to effectively collaborate with backend teams, ensuring seamless integration between front-end and back-end functionalities. Whether it's building interactive user interfaces or optimizing website performance, I approach every project with enthusiasm and a commitment to delivering high-quality results.
      </p>
      <p>
        As I continue to grow in my role as a web developer, I am excited to explore new technologies and push the boundaries of what is possible in web development. With a strong foundation in both front-end and backend development, I am well-equipped to tackle diverse challenges and contribute to the success of projects across the full stack.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About