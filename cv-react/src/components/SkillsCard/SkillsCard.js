import "./SkillsCard.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import { skillsData } from "../../utils/DataConfig";

function SkillsCard() {
    const progressView = () => {
        const items = skillsData.map((data, index) => (
            <div className="content" key={index}>
                <h3 className="title">{data.title}</h3>
                {data.contents.map((content, index1) => (
                    <div className="progress" key={index1}>
                        <div className="progress-text">
                            <h6 className="title">{content.title}</h6>
                            <h6 className="title">{content.progress}</h6>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-inner"
                                style={{ width: content.progress }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        ));
        return items;
    };
    return (
        <div id="skills" className="skills-card section">
            <div className="container">
                <SectionTitle title="skills" />
                <div className="skills-inner">{progressView()}</div>
            </div>
        </div>
    );
}

export default SkillsCard;
