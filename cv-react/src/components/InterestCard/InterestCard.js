import './InterestCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import { interestData } from '../../utils/DataConfig'
function InterestCard() {
    const interestElement = () => {
        return interestData.interests.map((data, index) => 
            <span key={index} className={index%2===0 ? "content" : "content green"}>
                <i className={data.classIconFA + " icon"}></i><br />
                {data.title}
            </span>
        )
    }
    return (
        <div id="interest" className="interest-card section">
            <div className="container">
                <div className="interest-inner">
                    <SectionTitle title="interest" />
                    <div className="interest-wrap">
                        <div className="interest-above">
                            {interestData.description}
                        </div>
                        <div className="interest-below">
                            {interestElement()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestCard;