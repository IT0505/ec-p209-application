import MainLayout from '../../components/MainLayout';
import './CardManager.scss';
import React, { useEffect, useState } from 'react';
import debitcardImg from '../../assets/images/DebitCard.png';
import interdebitcardImg from '../../assets/images/InterDebitCard.png';
import creditcardImg from '../../assets/images/CreditCard.png';
import Title from '../../components/Title/Title';
import CardService from '../../services/CardService';
import MyFormat from '../../libs/MyFormat';
import RequestService from '../../services/RequestService';
import AccountService from '../../services/AccountService';

function CardManager() {
    const [tab, setTab] = useState("debit");
    const [loaded, setLoaded] = useState(false);
    const [cardExists, setCardExists] = useState({})

    const [debit, setDebit] = useState(
        {
            // debit_card_id: null,
            // debit_type_code: null,
            // date_open: null,
            // account_number: null,
            // customer_citizen_identification: null,
            // customer_name: null
        }
    );

    const [interDebit, setInterDebit] = useState(
        {
            // debit_card_id: null,
            // debit_type_code: null,
            // date_open: null,
            // account_number: null,
            // customer_citizen_identification: null,
            // customer_name: null
        }
    );

    const [credit, setCredit] = useState(
        {
            // credit_card_id: null,
            // date_open: null,
            // date_close: null,
            // expiration_date: null,
            // line_of_credit: null,
            // loan: null,
            // account_number: null,
            // customer_citizen_identification: null,
            // customer_name: null,
        }
    );
    
    //eslint-disable-next-line
    useEffect(() => {
        if(loaded === false) {
            setLoaded(true);

            CardService.getLocalDebitByCid({"cid": sessionStorage.getItem("token")})
            .then((response) => {
                setDebit(response.data);
            })
        
            CardService.getInterDebitByCid({"cid": sessionStorage.getItem("token")})
            .then((response) => {
                setInterDebit(response.data);
            })
        
            CardService.getCreditByCid({"cid": sessionStorage.getItem("token")})
            .then((response) => {
                setCredit(response.data);
            })

            AccountService.getAccountByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                RequestService.checkCard({accNum: response.data.account_number})
                .then((response) => {
                    setCardExists(response.data);
                })
            })
        }
    })

    const debitContent = () => {
        const Item = 
        cardExists.debit_card ? 
        <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={debitcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{MyFormat.getCardNumber(debit.debit_card_id)}</h3>
                    <h3 className="card-high name">{debit.customer_name}</h3>
                    <p className="card-normal">TUB Debit Card</p>
                    <p className="card-normal">Date of issue: {debit.date_open}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{debit.account_number}</p>
                </div>
            </div>
        </div>
        : cardExists.debit_request ? <p className="register-link">Your card request is being processed...</p>
        : <a href='/cardregister' className="register-link">Register Online</a>
        return Item;
    }

    const interDebitContent = () => {
        const Item = 
        cardExists.inter_debit_card ?
        <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={interdebitcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{MyFormat.getCardNumber(interDebit.debit_card_id)}</h3>
                    <h3 className="card-high name">{interDebit.customer_name}</h3>
                    <p className="card-normal">TUB International Debit Card</p>
                    <p className="card-normal">Date of issue: {interDebit.date_open}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{interDebit.account_number}</p>
                </div>
            </div>
        </div>
        : cardExists.inter_debit_request ? <p className="register-link">Your card request is being processed...</p>
        : <a href='/cardregister' className="register-link">Register Online</a>
        return Item;
    }

    const creditContent = () => {
        const Item = 
        cardExists.credit_card ?
        <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={creditcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{MyFormat.getCardNumber(credit.credit_card_id)}</h3>
                    <h3 className="card-high name">{credit.customer_name}</h3>
                    <p className="card-normal">TUB Credit Card</p>
                    <p className="card-normal">Date of issue: {credit.date_open}</p>
                    <p className="card-normal">Date close: {credit.date_close}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{credit.account_number}</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Expiration date</p>
                    <p className="cardinfo-text">{credit.expiration_date}</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Loan</p>
                    <p className="cardinfo-text">{credit.loan} VND</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Total loan</p>
                    <p className="cardinfo-text">{credit.total_loan} VND</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Line of credit</p>
                    <p className="cardinfo-text">{credit.line_of_credit} VND</p>
                </div>
            </div>
        </div>
        : cardExists.credit_request ? <p className="register-link">Your card request is being processed...</p>
        : <a href='/cardregister' className="register-link">Register Online</a>
        return Item;
    }

    return (
        <MainLayout>
            <main className="cardmanager-main">
                <Title title="Card Manager" link="/home" />
                <div className="cardview">
                    <div className="container">
                        <div className="cardview-func">
                            <button className={tab === "debit" ? "tablinks active" : "tablinks"} onClick={() => setTab("debit")}>
                                <i className="fa fa-credit-card card-icon"></i>
                                <p className="card-type">Debit Card</p>
                            </button>
                            <button className={tab === "inter-debit" ? "tablinks active" : "tablinks"} onClick={() => setTab("inter-debit")}>
                                <i className="fa fa-credit-card card-icon"></i>
                                <p className="card-type">Inter-Debit<br />Cards</p>
                            </button>
                            <button className={tab === "credit" ? "tablinks active" : "tablinks"} onClick={() => setTab("credit")}>
                                <i className="fas fa-credit-card card-icon"></i>
                                <p className="card-type">Credit Cards</p>
                            </button>
                        </div>
                        <div className="cardview-content">
                            <div id="debit" className="tabcontent" style={tab==="debit" ? {display:"block"} : {display:"none"}}>
                                {debitContent()}
                            </div>

                            <div id="inter-debit" className="tabcontent"  style={tab==="inter-debit" ? {display:"block"} : {display:"none"}}>
                                {interDebitContent()}
                            </div>

                            <div id="credit" className="tabcontent"  style={tab==="credit" ? {display:"block"} : {display:"none"}}>
                                {creditContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default CardManager;