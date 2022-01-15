import './AboutCard.scss'
import { aboutData } from '../../utils/DataConfig'

function AboutCard() {

    return (
        <div id="about" className="about-card section">
            <div className="container">
                <div className="about-inner">
                    <div className="about-above">
                        {aboutData.description}
                    </div>
                    <div className="about-below">
                        <button className="about-button">DOWNLOAD CV</button>
                        <button className="about-button">CONTACT ME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;