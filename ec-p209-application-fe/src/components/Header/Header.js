import './Header.scss';
import logo from '../../assets/images/logo.png'
import React, { useEffect, useState } from 'react';
import CustomerService from '../../services/CustomerService'

function Header(props) {
    let nonlogin = props.nonlogin;
    const [username, setUsername] = useState('loading...');

    // eslint-disable-next-line
    useEffect(() => {
        sessionStorage.getItem('role')==="customer" ?
        CustomerService.getCustomer({id: sessionStorage.getItem('token')}).then((response) => {
            if(username !== response.data.customer_name)
                setUsername(response.data.customer_name);
        }) : setUsername("admin");
    })

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        window.location.reload();
    }

    let button;
    nonlogin ? button  = <a href="/login" className="login">LOGIN <i className='fas fa-user-circle login-icon'></i></a>
    : button = <div className="user">
                <div className="user-inner">
                    <p className="user-text">Welcome</p>
                    <p className="user-name">{username}</p>
                </div>
                <span className="user-logout" onClick={handleLogout}><i className="fa fa-sign-out logout-icon"></i></span>
            </div>
    return (
        <header className="header">
            <div className="nav">
                <div className="container">
                    <div className="nav-inner">
                        <figure className="logo img">
                            <img src={logo} alt="" className=""></img>
                        </figure>
                        {button}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
