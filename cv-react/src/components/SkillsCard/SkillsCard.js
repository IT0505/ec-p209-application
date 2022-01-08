import './SkillsCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
function SkillsCard(props) {
    const progress = props.skillsContents;

    const progressContents = (progress) => {
        const items = progress.map((_progress, index) =>
            <div className="progress" key={index}>
                <div className="progress-text">
                    <h6 className="title">{_progress.title}</h6>
                    <h6 className="title">{_progress.progress}</h6>
                </div>
                <div className="progress-bar">
                    <div className="progress-inner" style={{width: _progress.progress}}></div>
                </div>
            </div>
        )
        return items;
    }
    return (
        <div id="skills" className="skills-card section">
            <div className="container">
                <SectionTitle title="skills"/>
                <div className="skills-inner">
                    <div className="content">
                        <h3 className="title">Professional</h3>
                        {progressContents(progress.professional)}
                    </div>
                    <div className="content">
                        <h3 className="title">Personal</h3>
                        {progressContents(progress.personal)}
                    </div>
                    <div className="content">
                        <h3 className="title">Software</h3>
                        {progressContents(progress.software)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard;