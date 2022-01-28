import './TestimonialsCard.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { clientData, clientLogoData } from '../../utils/DataConfig';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function TestimonialsCard() {
  const [loadSlider, setLoadSlider] = useState({
    position: 0,
    logoArr: [...clientLogoData],
  });

  const clientsView = () => {
    return (
      <>
        <Swiper pagination={{ clickable: true }} className='mySwiper'>
          {clientData.map((data, index) => (
            <SwiperSlide className='client-content' key={index}>
              <figure className='client-avt img'>
                <img className='client-img' src={data.avt} alt='client'></img>
              </figure>
              <blockquote className='client-description'>
                {data.description}
              </blockquote>
              <span className='client-signature'>{data.signature}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };

  const clientLogosView = () => {
    return (
      <div
        className='autoSlider-wrap'
        style={{
          transition: loadSlider.position !== 0 && '2s',
          left: `${loadSlider.position}px`,
        }}
      >
        {loadSlider.logoArr.map((data, index) => (
          <figure className='client-logo img' key={index}>
            <img className='client-img' src={data.src} alt='client'></img>
          </figure>
        ))}
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      let _logoArr = loadSlider.logoArr;
      let _position = 0;
      if (loadSlider.position !== 0) {
        _logoArr.push(_logoArr.shift());
        _position = 0;
      } else {
        _position = -150;
      }
      setLoadSlider({
        position: _position,
        logoArr: [..._logoArr],
      });
    }, 2000);
  }, [loadSlider]);

  return (
    <div id='testimonials' className='testimonials-card section'>
      <div className='container'>
        <div className='testimonials-inner'>
          <SectionTitle title='testimonials' />
          <div className='clients-info'>{clientsView()}</div>
          <div className='client-list'>{clientLogosView()}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
