import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  const [slideIndex, setSlideIndex] = useState(0)

  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  return (
    <Container>
      <Slider {...settings} ref={slider}>
        <Slide index={0} bgImg={slide1}>
          <div>
            <p>Connect with your roots</p>
            <h1>Discover the newest african jewely collection n stock</h1>
            <a href="/">Shop Now</a>
          </div>
          <Nav setSlideIndex={setSlideIndex} />
        </Slide>
        <Slide index={1} bgImg={slide2}>
          <div>
            <p>Connect with your roots</p>
            <h1>Discover the newest african jewely collection n stock</h1>
            <a href="/">Shop Now</a>
          </div>
          <Nav setSlideIndex={setSlideIndex} />
        </Slide>
        <Slide index={2} bgImg={slide3}>
          <div>
            <p>Connect with your roots</p>
            <h1>Discover the newest african jewely collection n stock</h1>
            <a href="/">Shop Now</a>
          </div>
          <Nav setSlideIndex={setSlideIndex} />
        </Slide>
      </Slider>
    </Container>
  )
}

export function Nav(props) {
  const setSlideIndex = props.setSlideIndex

  return (
    <SliderNav>
      <button onClick={() => setSlideIndex(0)}>- 01</button>
      <button onClick={() => setSlideIndex(1)}>- 02</button>
      <button onClick={() => setSlideIndex(2)}>- 03</button>
    </SliderNav>
  )
}


const Container = styled.div`
  width: 90%;
  margin: 7rem auto;
`

const Slide = styled.div`
  height: 600px;
  width: 100%;
  background: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  display: flex !important;
  align-items: center !important;
  color: #fff;
  position: relative;

  div {
    margin-left: 200px !important;
  }

  p, a {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 600;
    font-size: 4.5rem;
    line-height: 6rem;
    margin: 3rem 0;
    max-width: 600px;
  }

  a {
    display: inline-block;
    border-bottom: 2px solid #fff;
    color: #fff;
    padding-bottom: 1rem;
  }
`

const SliderNav = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;

  button {
    color: #fff;
    outline: none;
    border: none;
    font-weight: 300;
    font-size: 1.7rem;
    margin: 1.5rem 0;
    background: transparent
  }
`