import './Loader.scss';

function Loader() {
  return (
    <div className='loader-screen'>
      <div className='loader-wrapper animate__animated animate__bounceInDown'>
        <div className='loader-box'>
          <span className='loader-inner'></span>
        </div>
      </div>
      <h3 className='loader-name'>THANH TRAN</h3>
      <h6 className='loader-job'>Software Engineer & UI/UX Expect</h6>
    </div>
  );
}

export default Loader;
