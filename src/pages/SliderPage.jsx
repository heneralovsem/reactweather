import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import splideimg1 from '../assets/images/splideimg1.jpg'
import splideimg2 from '../assets/images/splideimg2.jpg'
import '@splidejs/react-splide/css';
import '../styles/sliderpage.css'
import { Link } from "react-router-dom";
const SliderPage = function() {
    return (
        <div>
            <div className="start-block">
                <h1 className="start-text">5 day weather forecast</h1>
            <Link to="/weather"><button className="start-btn">Start</button></Link> 
            </div>
           
            <Splide className="slider"
            options={{
                rewind: true,
                width: '100vw',
                height: '100vh',
                autoplay: true,
                interval: 4000,
                type: 'fade',
                perMove: 1,
                perPage: 1,
                arrows: false,
                pagination: false,

            }}>
                <SplideSlide>
                    <img src={splideimg1} alt="s" />
                </SplideSlide>
                <SplideSlide>
                    <img src={splideimg2} alt="s" />
                </SplideSlide>
            </Splide>
        </div>
    );
};
export default SliderPage;