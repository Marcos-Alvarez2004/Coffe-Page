import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Testimonials.css";
import dataTestimonial from "../testimonialsData";

const Testimonials = () => {
  const [people] = useState(dataTestimonial);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Efecto slider con intervalo de segundos

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 7000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);
  return (
    <section className="sectionTestimonial">
      <div className="sectionCenter-Testimonial">
        {people.map((item, indexPeople) => {
          const { id, imgUrl, quote, name } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <aside className={position} key={id}>
              <img src={imgUrl} alt={name} className="personImgTestimonial" />
              <h4 className="nameTestimonial">{name}</h4>
              <p className="textTestimonial">{quote}</p>
            </aside>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i>
            <IoIosArrowBack />
          </i>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i>
            <IoIosArrowForward />
          </i>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
