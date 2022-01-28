import './SideNav.scss';
import { useState } from 'react';
import { profileInfo } from '../../utils/DataConfig';
import { navLinks } from '../../utils/DataConfig';
function Sidenav() {
  const [visible, setVisible] = useState(false);

  const handleSidenav = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  const linkContents = () => {
    const items = navLinks.map((navLink, index) => (
      <a key={index} href={navLink.href} className='nav-item'>
        <i className={navLink.classIconFA + ' icon'}></i>
        {navLink.title}
      </a>
    ));
    return items;
  };
  return (
    <>
      <div
        id='mySideNav'
        className='side-nav'
        style={visible ? { left: '0px' } : { left: '-200px' }}
      >
        <div className='name-holder'>
          <span className='name'>{profileInfo.name.charAt(0)}</span>
        </div>
        {linkContents()}
      </div>
      <div
        className='nav-button'
        onClick={handleSidenav}
        style={visible ? { left: '210px' } : { left: '10px' }}
      >
        <div className={visible ? 'change bar1' : 'bar1'}></div>
        <div className={visible ? 'change bar2' : 'bar2'}></div>
        <div className={visible ? 'change bar3' : 'bar3'}></div>
      </div>
    </>
  );
}

export default Sidenav;
