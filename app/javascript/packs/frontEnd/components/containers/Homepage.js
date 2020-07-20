/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import uid from 'uid';
import { useTransition, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Hero from '../presentational/Hero';
import {
  selectHero, selectShowCase, selectTestimonials,
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

  const [carousel, setCarousel] = useState(testimonials.data);

  const carouselRef = useRef(carousel);
  carouselRef.current = carousel;

  const [loop, setLoop] = useState(null);

  const loopSlider = () => {
    if (!testimonials.time) return null;
    const slideLoop = setInterval(() => {
      const buffer = [...carouselRef.current];
      buffer.push(buffer.shift());
      setCarousel(buffer);
    }, testimonials.time * 1000);

    setLoop(slideLoop);
    return 0;
  };

  useEffect(() => {
    loopSlider();
  }, []); // eslint-disable-line

  const transitions = useTransition(carousel.map((item, i) => (
    { ...item, xy: [400 * i, 0] })), item => item.name, {
    from: ({ xy }) => ({ xy, opacity: 0 }),
    enter: ({ xy }) => ({ xy, opacity: 1 }),
    update: ({ xy }) => ({ xy }),

  });

  const updateIndex = by => {
    clearInterval(loop);
    const buffer = [...carousel];
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
    setCarousel(buffer);
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
      <Hero image={heroImage} />
      <Section title={showCase.title} subtitle={showCase.subtitle}>
        {showCase.data.map(item => (
          <Data
            title={item.title}
            paragraph={item.paragraph}
            key={uid()}
            image={item.image}
            reverse={item.reverse}
            button={item.button}
            hasButton={item.hasButton}
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
