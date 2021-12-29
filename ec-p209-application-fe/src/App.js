import React from 'react';
import Index from './pages/Index/Index';
import Home from './pages/Home/Home';
import CardManager from './pages/CardManager/CardManager';
import CardRequest from './pages/CardRequest/CardRequest';
import PaymentAccount from './pages/PaymentAccount/PaymentAccount';
import CardRegister from './pages/CardRegister/CardRegister';
import Login from './pages/Login/Login';
import AdminMain from './pages/AdminMain/AdminMain';
import Store from './pages/Store/Store';

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <Navigate replace to="/home" />: <Index /> } />
                <Route path="/home" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <Home /> : <Navigate replace to="/" />} />
                <Route path="/cardmanager" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <CardManager /> : <Navigate replace to="/" />} />
                <Route path="/paymentaccount" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <PaymentAccount /> : <Navigate replace to="/" /> } />
                <Route path="/cardregister" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <CardRegister /> : <Navigate replace to="/" /> } />
                <Route path="/login" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <Navigate replace to="/home" /> : <Login isadmin={false} login={true} /> } />
                <Route path="/register" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='customer' ? <Navigate replace to="/home" /> : <Login />} />

                <Route path="/admin" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='admin'?  <AdminMain /> : <Navigate replace to="/admin/login" />} />
                <Route path="/admin/login" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='admin' ? <Navigate replace to="/admin" /> : <Login isadmin={true} login={true}/> } />
                <Route path="/cardrequest/:id" element={ sessionStorage.getItem('token') && sessionStorage.getItem('role')==='admin' ? <CardRequest /> : <Navigate replace to="/" /> } />

                <Route path="/store" element={ <Store />} />
{/*                 
                    {tokenExists !== null
                    ? <>
                        <Route path="/" element={ <Navigate replace to="/home" /> } />
                        <Route path="/home" element={ <Home />} />
                        <Route path="/cardmanager" element={ <CardManager /> } />
                        <Route path="/paymentaccount" element={ <PaymentAccount />} />
                        <Route path="/carddetail/:type" element={ <CardDetail />} />
                        <Route path="/cardregister" element={ <CardRegister />} />
                    </>
                    : 
                    <>
                        <Route path="/" element={ <Index />} />
                        <Route path="/login" element={ <Login login={true} /> } />
                        <Route path="/register" element={ <Login /> } /> 
                        <Route path="/*" element={ <Navigate replace to="/" /> } />
                    </>} */}
            </Routes>
        </Router>
    );
}

export default App;