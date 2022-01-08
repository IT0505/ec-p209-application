import './Timeline.scss'

function Timeline(props) {

    const timelineContents = (timelineContents) => {
        let items = timelineContents.map((timelineContent, index) => 
            <div className={index%2===0 ? "timeline-inner left" : "timeline-inner right"} key={index}>
                {/* <span className="title">Title</span> */}
                <div className="content">
                    <h3 className="timeline-title">{timelineContent.title}</h3>
                    <h6 className="timeline-info highlight">{timelineContent.place}</h6>
                    <h6 className="timeline-info highlight">{timelineContent.time}</h6>
                    <p className="timeline-info">{timelineContent.discription}</p>
                </div>
            </div>
        )
        return items;
    }

    return (
        <div className="timeline">
            {timelineContents(props.timelineContents)}
        </div>

    )
}

export default Timeline;