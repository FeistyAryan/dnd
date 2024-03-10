import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default function hero() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img style={{width:'100vw',height:'93vh'}} src = 'heroimg1.jpg'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img style={{width:'100vw',height:'93vh'}} src = 'heroimg2.jpg'/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img style={{width:'100vw',height:'93vh'}} src = 'heroimg3.jpg'/>
      </Carousel.Item>

    </Carousel>
    
  )
}
