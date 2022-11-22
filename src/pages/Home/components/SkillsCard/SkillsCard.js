import './SkillsCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { skillsData } from '../../../../utils/DataConfig';
import SkillsContent from './components/SkillsContent/SkillsContent';
function SkillsCard() {
  return (
    <div id='skills' className='skills-card section'>
      <div className='container'>
        <div className='skills-inner'>
          <SectionTitle title='skills' />
          <SkillsContent skillsData={skillsData} />
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
