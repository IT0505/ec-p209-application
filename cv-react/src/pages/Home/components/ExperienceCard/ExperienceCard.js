import './ExperienceCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Timeline from '../../../../components/Timeline/Timeline';
import { experienceData } from '../../../../utils/DataConfig';

function ExperienceCard() {
  return (
    <div id='experience' className='experience-card section'>
      <div className='container'>
        <div className='experience-inner'>
          <SectionTitle title='experience' />
          <Timeline timelineData={experienceData} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
