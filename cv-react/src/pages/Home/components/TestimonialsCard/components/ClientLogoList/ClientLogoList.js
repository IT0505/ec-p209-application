import { useState, useEffect } from 'react';
import './ClientLogoList.scss';
function ClientLogoList(props) {
  const clientLogoData = props.clientLogoData;
  const [loadSlider, setLoadSlider] = useState({
    position: 0,
    logoArr: [...clientLogoData],
  });

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
}
export default ClientLogoList;
