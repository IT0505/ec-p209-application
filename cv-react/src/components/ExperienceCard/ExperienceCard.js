import './ExperienceCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Timeline from '../Timeline/Timeline'
import { experienceData } from '../../utils/DataConfig'

function ExperienceCard() {

    return (
        <div id="experience" className="experience-card section">
            <div className="container">
                <SectionTitle title="experience"/>
                <div className="experience-inner">
                    <Timeline timelineData={experienceData} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;