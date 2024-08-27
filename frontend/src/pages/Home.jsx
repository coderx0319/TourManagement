import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from "../assets/images/world.png"

import experienceImg from "../assets/images/experience.png"
import "../styles/home.css"
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    // hero section  start<>
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="worldimg" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                 Welcome to Travel World, your gateway to unforgettable journeys and extraordinary adventures. Discover breathtaking destinations, handpicked travel tips, and curated experiences that make every trip unique. Whether you’re seeking a serene escape or an adrenaline-packed adventure, we have something for every wanderer. Let us guide you in creating memories that last a lifetime. Your next great adventure starts here!
               </p>
             </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box'>
                <img src={heroImg} alt="heroimg" />
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box hero__video-box mt-4'>
                <video src={heroVideo} alt="herovideo" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className='hero__img-box  mt-5'>
                <img src={heroImg2} alt="heroimg" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* //hero section end */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='services__subtitle'>What we Serve</h5>
              <h2 className='services__title'>we offer best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='features__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* featured tour section start */}
      {/* experience section start */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />

                <h2>With our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                  Magni voluptate quibusdam, nihil eius, provident dolor</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>12k</span>
                  <h6>SuccessFull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className='experience__img'>
                <img src={experienceImg}  alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* experience section end */}
      {/* gallery section start */}

      <section id='gallery'>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className='gallery__title'>Visit our customer tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>



      {/* gallery section end */}

      {/* testimonial section start */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Fans Love"} />
                <h2 className='testimonial__title'>What our fans say about us</h2>
              </Col>
              <Col lg="12">
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>

      {/* testimonial section end */}

      <Newsletter />
    </>
  )
}

export default Home
