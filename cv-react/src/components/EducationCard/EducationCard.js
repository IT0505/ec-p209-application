import "./EducationCard.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Timeline from "../Timeline/Timeline";
import { educationData } from "../../utils/DataConfig";

function EducationCard() {
    return (
        <div id="education" className="education-card section">
            <div className="container">
                <SectionTitle title="education" />
                <div className="education-inner">
                    <Timeline timelineData={educationData} />
                </div>
            </div>
        </div>
    );
}

export default EducationCard;
