import { useState } from 'react';
import './PortfoliosCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { portfoliosData } from '../../../../utils/DataConfig';
import PortfoliosNav from './components/PortfoliosNav/PortfoliosNav';
import PortfoliosImgGrid from './components/PortfoliosImgGrid/PortfoliosImgGrid';
import PortfoliosLightbox from './components/PortfoliosLightbox/PortfoliosLightbox';

function PortfoliosCard() {
  const [tab, setTab] = useState('all');
  const [viewAll, setViewAll] = useState(false);
  const [lightbox, setLightbox] = useState({
    photoIndex: 0,
    isOpen: false,
    items: portfoliosData[0].items,
  });

  return (
    <div id='portfolios' className='portfolios-card section'>
      <div className='container'>
        <div className='portfolios-inner'>
          <SectionTitle title='portfolios' />
          <PortfoliosNav
            portfoliosData={portfoliosData}
            tab={tab}
            setTab={setTab}
          />
          <div className='portfolios-content'>
            <PortfoliosImgGrid
              portfoliosData={portfoliosData}
              tab={tab}
              setTab={setTab}
              viewAll={viewAll}
              lightbox={lightbox}
              setLightbox={setLightbox}
            />
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
            <PortfoliosLightbox lightbox={lightbox} setLightbox={setLightbox} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfoliosCard;
