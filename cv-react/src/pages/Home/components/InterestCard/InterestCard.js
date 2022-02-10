import './InterestCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { interestData } from '../../../../utils/DataConfig';
import InterestList from './components/InterestList/InterestList';
function InterestCard() {
  return (
    <div id='interest' className='interest-card section'>
      <div className='container'>
        <div className='interest-inner'>
          <SectionTitle title='interest' />
          <div className='interest-content'>
            <div className='interest-description'>
              {interestData.description}
            </div>
            <InterestList interestData={interestData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestCard;
