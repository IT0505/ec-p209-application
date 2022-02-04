import './Timeline.scss';
import { useState, useEffect } from 'react';
import { fadeInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s',
  },
});

function Timeline(props) {
  const [showModal, setShowModal] = useState({
    mode: false,
  });
  const handleModalDialog = (data) => {
    if (showModal.mode) {
      setShowModal({ mode: false });
    } else {
      setShowModal({
        ...showModal,
        ...data,
        mode: true,
      });
    }
  };

  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.className === 'modal') {
        handleModalDialog();
      }
    };
  });

  const stringCustom = (string) => {
    let _string = string;
    _string = _string.substring(0, 150);
    _string = _string.substring(0, _string.lastIndexOf('.') + 1);
    return _string;
  };

  const timelinePoint = (title) => {
    switch (title) {
      case 'Web Development':
        return <i className='fa fa-globe'></i>;
      case 'Software Engineering':
        return <i className='fas fa-graduation-cap'></i>;
      default:
        return <p>{title.charAt(0)}</p>;
    }
  };
  return (
    <div className='timeline'>
      {props.timelineData.map((data, index) => (
        <div
          className={
            index % 2 === 0 ? 'timeline-inner left' : 'timeline-inner right'
          }
          key={index}
        >
          <div className='content'>
            <h3 className='timeline-title'>{data.title}</h3>
            <h6 className='timeline-info highlight'>{data.place}</h6>
            <h6 className='timeline-info highlight'>{data.time}</h6>
            <p className='timeline-info'>
              {data.description.length > 150 || data.img ? (
                <>
                  {stringCustom(data.description)} <br />
                  <i
                    className='fa fa-ellipsis-h'
                    style={{ color: '#1976D2', cursor: 'pointer' }}
                    onClick={() => handleModalDialog(data)}
                  ></i>
                </>
              ) : (
                data.description
              )}
            </p>
          </div>
          <span className='timeline-point'>{timelinePoint(data.title)}</span>
        </div>
      ))}
      {showModal.mode && (
        <div id='myModal' className='modal'>
          <div className={'modal-content ' + css(styles.fadeInDown)}>
            <span className='close' onClick={handleModalDialog}>
              &times;
            </span>
            <div className='main-content'>
              <h3 className='timeline-title'>{showModal.title}</h3>
              <h6 className='timeline-info highlight'>{showModal.place}</h6>
              <h6 className='timeline-info highlight'>{showModal.time}</h6>
              {showModal.img && (
                <figure className='timeline-image img'>
                  <img src={showModal.img} alt={showModal.imgAlt}></img>
                </figure>
              )}
              <p className='timeline-info'>{showModal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timeline;
