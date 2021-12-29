import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from 'react';

function MainLayout(props) {
    return (
        <React.Fragment>
        <Header nonlogin={props.nonlogin}/>
        {props.children}
        <Footer />
        </React.Fragment>
    )
}

export default MainLayout;