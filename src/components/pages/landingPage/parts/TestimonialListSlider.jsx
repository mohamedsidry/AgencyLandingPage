import React from 'react';
import Slider from 'react-slick';
import TestimonialItem from './TestimonialItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TestimonialListSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
    </Slider>
  )
}

export default TestimonialListSlider