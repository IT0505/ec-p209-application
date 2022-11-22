import './InterestList.scss';

function InterestList(props) {
  const interestData = props.interestData;
  return (
    <div className='interest-list'>
      {interestData.interests.map((data, index) => (
        <span
          key={index}
          className={index % 2 === 0 ? 'content' : 'content green'}
        >
          <i className={data.classIconFA + ' icon'}></i>
          <br />
          {data.title}
        </span>
      ))}
    </div>
  );
}

export default InterestList;
