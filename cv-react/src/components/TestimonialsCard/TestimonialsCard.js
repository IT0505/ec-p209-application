import "./TestimonialsCard.scss";
import $ from "jquery";
import { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { clientData, clientLogoData } from "../../utils/DataConfig";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);

function TestimonialsCard() {
    // const [tab, setTab] = useState(0)
    const [loadSlider, setLoadSlider] = useState(300);

    const clientsView = () => {
        return (
            <>
                <Swiper pagination={{ clickable: true }} className="mySwiper">
                    {clientData.map((data, index) => (
                        <SwiperSlide className="client-content" key={index}>
                            <figure className="client-avt img">
                                <img
                                    className="client-img"
                                    src={data.avt}
                                    alt="client"
                                ></img>
                            </figure>
                            <blockquote className="client-description">
                                {data.description}
                            </blockquote>
                            <span className="client-signature">
                                {data.signature}
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    };

    const clientLogosView = () => {
        return (
            <div
                className="autoSlider-wrap"
                style={{ "--loadSlider": `${loadSlider}px` }}
            >
                {clientLogoData.map((data, index) => (
                    <figure className="client-logo img" key={index}>
                        <img
                            className="client-img"
                            src={data.src}
                            alt="client"
                        ></img>
                    </figure>
                ))}
            </div>
        );
    };

    useEffect(() => {
        if ($(".client-list") && $(".autoSlider-wrap")) {
            setLoadSlider(
                $(".client-list").width() - $(".autoSlider-wrap").width()
            );
        }
    }, []);

    return (
        <div id="testimonials" className="testimonials-card section">
            <div className="container">
                <div className="testimonials-inner">
                    <SectionTitle title="testimonials" />
                    <div className="clients-info">{clientsView()}</div>
                    <div className="client-list">{clientLogosView()}</div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsCard;
