/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uid from 'uid';
import { useTransition, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Hero from '../presentational/Hero';
import {
  selectHero, selectHeroBox, selectShowCase, selectTestimonials, updateTestimonials,
} from '../../features/home/homeSlice';
import Section from '../presentational/Section';
import Data from '../presentational/Data';
import './Animations.css';
import * as S from '../presentational/Home.styles';
import Testimonial from '../presentational/Testimonial';

const Homepage = () => {
  const heroImage = useSelector(selectHero);
  const showCase = useSelector(selectShowCase);
  const testimonials = useSelector(selectTestimonials);
  const heroBox = useSelector(selectHeroBox);
  const dispatch = useDispatch();

  const carouselRef = useRef(testimonials.data);
  carouselRef.current = testimonials.data;

  const [loop, setLoop] = useState(null);

  const loopSlider = () => {
    if (!testimonials.time) return null;
    const slideLoop = setInterval(() => {
      const buffer = [...carouselRef.current];
      buffer.push(buffer.shift());
      dispatch(updateTestimonials(buffer));
    }, testimonials.time * 1000);

    setLoop(slideLoop);
    return 0;
  };

  useEffect(() => {
    loopSlider();
  }, []); // eslint-disable-line

  const transitions = useTransition(testimonials.data.map((item, i) => (
    { ...item, xy: [400 * i, 0] })), item => item.name, {
    from: ({ xy }) => ({ xy, opacity: 0 }),
    enter: ({ xy }) => ({ xy, opacity: 1 }),
    update: ({ xy }) => ({ xy }),

  });

  const updateIndex = by => {
    clearInterval(loop);
    const buffer = [...testimonials.data];
    switch (by) {
      case 1:
        buffer.push(buffer.shift());
        break;
      case -1:
        buffer.unshift(buffer.pop());
        break;
      default:
        break;
    }
    dispatch(updateTestimonials(buffer));
    loopSlider();
  };

  const [canSlide, setCanSlide] = useState(true);

  const bind = useDrag(({ direction: [xDir], velocity }) => {
    const dir = xDir < 0 ? 1 : -1;
    if (velocity > 2 && canSlide) {
      updateIndex(dir);
      setCanSlide(false);
      setTimeout(() => {
        setCanSlide(true);
      }, 200);
    }
  });

  return (
    <>
      <Hero image={heroImage} heroBox={heroBox} />
      <Section title={showCase.title} subtitle={showCase.subtitle}>
        {showCase.data.map((itemo, index) => (
          <Data
            title={itemo.title}
            paragraph={itemo.paragraph}
            key={index * 203} // eslint-disable-line react/no-array-index-key
            image={itemo.image}
            reverse={itemo.reverse}
            button={itemo.button}
            hasButton={itemo.hasButton}
          />
        ))}
      </Section>
      <Section title={testimonials.title} subtitle={testimonials.subtitle}>
        <S.CarouselControls>
          <i className="fas fa-chevron-circle-left" onClick={() => updateIndex(1)} />
          <i className="fas fa-chevron-circle-right" onClick={() => updateIndex(-1)} />
        </S.CarouselControls>
        <S.Testimonials>
          {transitions.map(({ item, props: { xy, ...rest }, key }) => (
            <animated.div
              {...bind()} // eslint-disable-line react/jsx-props-no-spreading
              key={key}
              style={{
                transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
                ...rest,
                minHeight: '300px',
                minWidth: '200px',
                margin: '100px 0',
                touchAction: 'none',
              }}
            >
              <Testimonial
                name={item.name}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            </animated.div>
          ))}
        </S.Testimonials>
      </Section>
    </>
  );
};

export default Homepage;
