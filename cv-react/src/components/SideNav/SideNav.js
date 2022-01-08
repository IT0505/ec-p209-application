import './SideNav.scss'
import { useState } from 'react'

function Sidenav(props) {
    const name = props.name;
    const [visible, setVisible] = useState(false)

    const handleSidenav = () => {
        if(visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }
    return (
        <>
            <div id="mySideNav" className="side-nav" style={visible ? {left: '0px'} : {left: '-200px'}}>
                <div className="name-holder">
                    <span className="name">{name}</span>
                </div>
                <a href="#header" className="nav-item"><i className="fa fa-user icon"></i>Home</a>
                <a href="#about" className="nav-item"><i className="fa fa-dashboard icon"></i>About</a>
                <a href="#education" className="nav-item"><i className="fa fa-graduation-cap icon"></i>Education</a>
                <a href="#skills" className="nav-item"><i className="fa fa-sliders icon"></i>Skills</a>
                <a href="#experience" className="nav-item"><i className="fa fa-suitcase icon"></i>Experience</a>
                <a href="#portfolios" className="nav-item"><i className="fa fa-archive icon"></i>Portfolios</a>
                <a href="#interest" className="nav-item"><i className="fa fa-heart icon"></i>Interest</a>
                <a href="#testimonials" className="nav-item"><i className="fa fa-users icon"></i>Testimonials</a>
                <a href="#pricing" className="nav-item"><i className="fa fa-money icon"></i>Pricing</a>
                <a href="#blog" className="nav-item"><i className="fa fa-pencil-square icon"></i>Blog</a>
                <a href="#contact" className="nav-item"><i className="fa fa-envelope icon"></i>Contact</a>
            </div>
            <div className="nav-button" onClick={handleSidenav} style={visible ? {left: '210px'} : {left: '10px'}}>
                <div className={visible ? "change bar1" : "bar1"}></div>
                <div className={visible ? "change bar2" : "bar2"}></div>
                <div className={visible ? "change bar3" : "bar3"}></div>
            </div>
        </>
    )
}

export default Sidenav;