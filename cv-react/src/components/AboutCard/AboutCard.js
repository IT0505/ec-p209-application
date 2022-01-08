import './AboutCard.scss'

function AboutCard(props) {
    const aboutContent = props.aboutContent;
    return (
        <div id="about" className="about-card section">
            <div className="container">
                <div className="about-inner">
                    <div className="about-above">
                        {aboutContent.discription}
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