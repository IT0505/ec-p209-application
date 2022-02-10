import { useEffect } from 'react';
import $ from 'jquery';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import './PortfoliosLightbox.scss';

import './PortfoliosLightbox.scss';
import { flipInY } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  flipInY: {
    animationName: flipInY,
    animationDuration: '1s',
  },
});

function PortfoliosLightBox(props) {
  const lightbox = props.lightbox;
  const setLightbox = props.setLightbox;

  useEffect(() => {
    $('.lightbox-wrap div').first().addClass('lightbox');
    $('.lightbox-wrap img').addClass(css(styles.flipInY));
  });

  return (
    <div className='lightbox-wrap' id='lightbox'>
      <ReactImageVideoLightbox
        data={lightbox.items}
        startIndex={lightbox.photoIndex}
        showResourceCount={true}
        onCloseCallback={() => setLightbox({ ...lightbox, isOpen: false })}
        // onNavigationCallback={(currentIndex) =>
        //   console.log(`Current index: ${currentIndex}`)
        // }
      />
    </div>
  );
}

export default PortfoliosLightBox;
