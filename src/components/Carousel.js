import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Carousel, 
 } from 'react-bootstrap';
 import oneImg from "./images/topOne.jpg";
 import twoImg from "./images/topTwo.jpg";
 import threeImg from "./images/topThree.jpg";


export function TopSlide() {

    return (
      <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={oneImg}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={twoImg}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={threeImg}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
    );
  }

  export default TopSlide;