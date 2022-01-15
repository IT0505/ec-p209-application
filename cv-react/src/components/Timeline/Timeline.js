import './Timeline.scss'

function Timeline(props) {

    return (
        <div className="timeline">
            {props.timelineData.map((data, index) => 
            <div className={index%2===0 ? "timeline-inner left" : "timeline-inner right"} key={index}>
                {/* <span className="title">Title</span> */}
                <div className="content">
                    <h3 className="timeline-title">{data.title}</h3>
                    <h6 className="timeline-info highlight">{data.place}</h6>
                    <h6 className="timeline-info highlight">{data.time}</h6>
                    <p className="timeline-info">{data.description}</p>
                </div>
            </div>)}
        </div>
    )
}

export default Timeline;