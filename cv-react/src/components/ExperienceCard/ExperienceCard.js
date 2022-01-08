import './ExperienceCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Timeline from '../Timeline/Timeline'

function ExperienceCard(props) {

    return (
        <div id="experience" className="experience-card section">
            <div className="container">
                <SectionTitle title="experience"/>
                <div className="experience-inner">
                    <Timeline timelineContents={props.experienceContents} />
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;