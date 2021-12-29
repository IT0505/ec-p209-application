import MainLayout from '../../components/MainLayout';
import './Home.scss';
import React, { useEffect, useState } from 'react';
import background from '../../assets/images/btcbg.jpg';
import AccountService from '../../services/AccountService';
import Paypal from '../../components/Paypal/Paypal';
import CardService from '../../services/CardService';

function Home() {
    const [showing, setShowing] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [paypal, setPaypal] = useState(false);

    const [accountInfo, setAccountInfo] = useState({
        paymentaccount: null,
        accountbalance: null,
    })
    // eslint-disable-next-line
    useEffect(() =>{
        AccountService.getAccountByCid({cid: sessionStorage.getItem('token')}).then((response) => {
            if(loaded === false) {
                setLoaded(true);
                setAccountInfo({
                    paymentaccount: response.data.account_number,
                    accountbalance: response.data.total_asset
                })
            }
        })
    })

    const handlePaypalDisplay = () => {
        paypal ? setPaypal(false) :
        CardService.getLocalDebitByCid({cid: sessionStorage.getItem("token")})
        .then((response) => {
            if(response.data.debit_card_id) {
                setPaypal(true);
            } else alert("Please create Debit Card first!!!")
        })
    }

    return (
        <MainLayout>
            <main className="home-main">
                <figure className="banner img">
                    <img src={background} alt="" className=""></img>
                </figure>
                <div className="main-inner">
                    <div className="fav">
                        <div className="container">
                            <div className="fav-inner">
                                <hr/>
                                <div className="fav-above">
                                    <div className="account-info number">
                                        <h3 className="account-label">Payment Account</h3>
                                        <p className="account-value">{accountInfo.paymentaccount}</p>
                                    </div>
                                    <div className="account-info balance">
                                        <h3 className="account-label">Account Balances</h3>
                                        <p className="account-value" id="account-balance">{showing ? Intl.NumberFormat().format(accountInfo.accountbalance) +' VND' : "**************"}</p>
                                        {
                                            showing ? <i className="fas fa-eye" id="eye" onClick={() => setShowing(false)}></i> : showing===false && <i className="fas fa-eye-slash" id="eye" onClick={() => setShowing(true)}></i>
                                        }
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="func">
                        <div className="container">
                            <div className="func-inner">
                                <a href="/cardmanager" className="service func">
                                    <div className="service-inner func-inner">
                                        <i className="fa fa-credit-card func-icon"></i>
                                        <p className="func-label">Card Service</p>
                                    </div>
                                </a>
                                <a href="/paymentaccount" className="account func">
                                    <div className="account-inner func-inner">
                                        <i className="fas fa-wallet func-icon"></i>
                                        <p className="func-label">Payment<br/>Account</p>
                                    </div>
                                </a>
                                <button href="/home" className="transfer func" onClick={handlePaypalDisplay}>
                                    <div className="transfer-inner func-inner">
                                        <i className="fas fa-money-check-alt func-icon"></i>
                                        <p className="func-label">Recharge</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {paypal && <Paypal />}
                </div>
        </main>
    </MainLayout>
    );
}

export default Home;
