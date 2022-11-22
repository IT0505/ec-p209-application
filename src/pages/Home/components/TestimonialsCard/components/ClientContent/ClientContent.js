import './ClientContent.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function clientContent(props) {
  const clientData = props.clientData;
  return (
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
  );
}

export default clientContent;
