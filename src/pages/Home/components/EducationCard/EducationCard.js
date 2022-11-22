import './EducationCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Timeline from '../../../../components/Timeline/Timeline';
import { educationData } from '../../../../utils/DataConfig';

function EducationCard() {
  return (
    <div id='education' className='education-card section'>
      <div className='container'>
        <div className='education-inner'>
          <SectionTitle title='education' />
          <Timeline timelineData={educationData} />
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
