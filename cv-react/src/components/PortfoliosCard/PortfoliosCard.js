import { useState, useEffect } from 'react';
import './PortfoliosCard.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { portfoliosData } from '../../utils/DataConfig';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import $ from 'jquery';
import { fadeInRight, fadeInLeft, flipInY } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: '1s',
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '1s',
  },
  flipInY: {
    animationName: flipInY,
    animationDuration: '1s',
  },
});

function PortfoliosCard() {
  const [tab, setTab] = useState('all');
  const [viewAll, setViewAll] = useState(false);
  const [lightbox, setLightbox] = useState({
    photoIndex: 0,
    isOpen: false,
    items: portfoliosData[0].items,
  });

  const dribbleCustom = (index) => {
    if (index === 0) {
      return 'big ' + css(styles.fadeInRight);
    } else {
      return 'normal ' + css(styles.fadeInLeft);
    }
  };

  const websitesCustom = (index) => {
    if (index === 0 || index === 3 || index === 5) {
      return 'normal ' + css(styles.fadeInRight);
    } else {
      return 'normal ' + css(styles.fadeInLeft);
    }
  };
  const defaultClassName = (items, index) => {
    switch (items.length) {
      case 3:
        if (index === 0) {
          return 'big ' + css(styles.fadeInLeft);
        } else {
          return 'normal ' + css(styles.fadeInRight);
        }
      case 5:
        if (index === 0) {
          return 'big ' + css(styles.fadeInLeft);
        } else {
          return 'normal ' + css(styles.fadeInRight);
        }
      case 6:
        if (index === 0 || index === 1 || index === 3) {
          return 'normal ' + css(styles.fadeInLeft);
        } else {
          return 'normal ' + css(styles.fadeInRight);
        }
      default:
        return 'normal ' + css(styles.fadeIn);
    }
  };

  const classNameImplement = (items, index, type) => {
    switch (type) {
      case 'dribble':
        return dribbleCustom(index);
      case 'websites':
        return websitesCustom(index);
      default:
        return defaultClassName(items, index);
    }
  };

  const handleImageIndex = (index1, index2) => {
    let imageIndex = index2;
    for (let i = 0; i < index1; i++) {
      imageIndex += portfoliosData[i].items.length;
    }
    return imageIndex;
  };
  const imgView = () => {
    let items = [];
    let allItems = [];
    portfoliosData.forEach((data) => {
      data.items.forEach((item) => {
        if (item.type === 'video' || item.type === 'photo') {
          allItems.push(item);
        }
      });
    });
    portfoliosData.forEach((data, index1) => {
      if (tab === data.type || tab === 'all') {
        items.push(
          <div
            className={`tab-content total-${data.items.length} ${data.type}`}
            key={index1}
            style={{
              display:
                tab === 'all' && index1 !== 0 && !viewAll ? 'none' : 'grid',
            }}
          >
            {data.items.map((item, index2) => (
              <figure
                className={
                  'modal img ' +
                  classNameImplement(data.items, index2, data.type)
                }
                onClick={() =>
                  data.type === 'websites'
                    ? window.open(item.url)
                    : setLightbox({
                        ...lightbox,
                        photoIndex: handleImageIndex(index1, index2),
                        isOpen: true,
                        items: allItems,
                      })
                }
                key={index2}
              >
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className='portfolios-img'
                />
                <figcaption className='caption'>
                  <h6 className='title'>
                    {item.type === 'video' && (
                      <>
                        <i
                          className='fa fa-play-circle'
                          style={{ fontSize: '42px' }}
                        ></i>{' '}
                        <br />
                      </>
                    )}
                    {item.title}
                    <b>
                      {item.type === 'video'
                        ? 'video'
                        : item.type === 'photo'
                        ? 'image'
                        : 'page'}
                    </b>
                  </h6>
                  <p className='text'>{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        );
      }
    });
    return items;
  };

  useEffect(() => {
    $('.lightbox-wrap div').first().addClass('lightbox');
    $('.lightbox-wrap img').addClass(css(styles.flipInY));
  });

  const navView = () => {
    const items = (
      <>
        <button
          className={tab === 'all' ? 'tabLink active' : 'tabLink'}
          onClick={() => setTab('all')}
        >
          all
        </button>
        {portfoliosData.map((data, index) => (
          <button
            key={index}
            className={tab === data.type ? 'tabLink active' : 'tabLink'}
            onClick={() => setTab(data.type)}
          >
            {data.type}
          </button>
        ))}
      </>
    );
    return items;
  };
  return (
    <div id='portfolios' className='portfolios-card section'>
      <div className='container'>
        <div className='portfolios-inner'>
          <SectionTitle title='portfolios' />
          <div className='portfolios-nav'>{navView()}</div>
          <div className='portfolios-content'>
            {imgView()}
            {tab === 'all' && (
              <button
                className='view-btn'
                onClick={() => {
                  viewAll ? setViewAll(false) : setViewAll(true);
                }}
              >
                <i className={viewAll ? 'fas fa-arrow-up' : 'fas fa-plus'}></i>
              </button>
            )}
          </div>
          {lightbox.isOpen && (
            <div className='lightbox-wrap' id='lightbox'>
              <ReactImageVideoLightbox
                style={{ background: 'none' }}
                data={lightbox.items}
                startIndex={lightbox.photoIndex}
                showResourceCount={true}
                onCloseCallback={() =>
                  setLightbox({ ...lightbox, isOpen: false })
                }
                onNavigationCallback={(currentIndex) =>
                  console.log(`Current index: ${currentIndex}`)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfoliosCard;
