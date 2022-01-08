import './EducationCard.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Timeline from '../Timeline/Timeline'

function EducationCard(props) {
    // const timelines = props.educationContents;

    // const timelineContents = () => {
    //     let items = timelines.map((timeline, index) => 
    //         <div className={index%2===0 ? "timeline-container left" : "timeline-container right"} key={index}>
    //             {/* <span className="title">Title</span> */}
    //             <div className="content">
    //                 <h3 className="timeline-title">{timeline.education}</h3>
    //                 <h6 className="timeline-info highlight">{timeline.place}</h6>
    //                 <h6 className="timeline-info highlight">{timeline.time}</h6>
    //                 <p className="timeline-info">{timeline.discription}</p>
    //             </div>
    //         </div>
    //     )
    //     return items;
    // }

    return (
        <div id="education" className="education-card section">
            <div className="container">
                <SectionTitle title="education"/>
                <div className="education-inner">
                    <Timeline timelineContents={props.educationContents} />
                </div>
            </div>
        </div>
    )
}

export default EducationCard;