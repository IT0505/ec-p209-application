import './PortfoliosNav.scss';

function portfoliosNav(props) {
  const portfoliosData = props.portfoliosData;
  const tab = props.tab;
  const setTab = props.setTab;

  const items = (
    <div className='portfolios-nav'>
      <button
        className={tab === 'all' ? 'tabLink active' : 'tabLink'}
        onClick={() => setTab('all')}
      >
        all
      </button>
      {portfoliosData.map((data, index) => (
        <button
          key={index}
          className={tab === data.type ? 'tabLink active' : 'tabLink'}
          onClick={() => setTab(data.type)}
        >
          {data.type}
        </button>
      ))}
    </div>
  );
  return items;
}

export default portfoliosNav;
