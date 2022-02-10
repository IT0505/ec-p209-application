import './SkillsContent.scss';

function SkillsContent(props) {
  const skillsData = props.skillsData;
  return (
    <div className='skills-content'>
      {skillsData.map((data, index) => (
        <div className='content' key={index}>
          <h3 className='title'>{data.title}</h3>
          {data.contents.map((content, index1) => (
            <div className='progress' key={index1}>
              <div className='progress-text'>
                <h6 className='title'>{content.title}</h6>
                <h6 className='title'>{content.progress}</h6>
              </div>
              <div className='progress-bar'>
                <div
                  className='progress-inner'
                  style={{ width: content.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SkillsContent;
