import MainLayout from '../../components/MainLayout';
import './PaymentAccount.scss';
import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
import UserService from '../../services/UserService';
import TransactionService from '../../services/TransactionService';
import AccountService from '../../services/AccountService';
import MyFormat from '../../libs/MyFormat'

function PaymentAccount() {
    const [tab, setTab] = useState("payment-all");

    const [searchInput, setSearchInput] = useState();
    const [loaded, setLoaded] = useState(false);

    const [paymentin, setPaymentIn] = useState([
        // {
        //     transaction_id: "01234",
        //     date_of_transaction: "24/5/2021",
        //     total_price: 900000000,
        //     transaction_type_name: "payment",
        //     debit_card_id: null,
        //     credit_card_id: null,
        //     account_number: null,
        //     customer_citizen_identification: null,
        // },
        // {
        //     transaction_id: "01234",
        //     date_of_transaction: "24/5/2021",
        //     total_price: 900000000,
        //     transaction_type_name: "payment",
        //     debit_card_id: null,
        //     credit_card_id: null,
        //     account_number: null,
        //     customer_citizen_identification: null,
        // },
    ])

    const [paymentout, setPaymentOut] = useState([
        // {
        //     transaction_id: "01234",
        //     date_of_transaction: "24/5/2021",
        //     total_price: -900000000,
        //     transaction_type_name: "payment",
        //     debit_card_id: null,
        //     credit_card_id: null,
        //     account_number: null,
        //     customer_citizen_identification: null,
        // },
    ])

    const [paymentall, setPaymentAll] = useState([])

    const [account, setAccount] = useState({});

    // eslint-disable-next-line
    useEffect(() => {
        if(loaded===false) {
            TransactionService.getTransactionByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                let payment = response.data;
                let payin = [];
                let payout = [];
                let payall = [];
                for(let i = 0; i < payment.length; i++) 
                {
                    payall = [...payall, payment[i]];
                    if(payment[i].total_price>=0) payin = [...payin, payment[i]]
                    else payout = [...payout, payment[i]]
                }
                setPaymentIn(payin);
                setPaymentOut(payout);
                setPaymentAll(payall);
            })
            AccountService.getAccountByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                setAccount(response.data);
            })
            setLoaded(true);
        }
    })
    const paymentInContent = () => {
        const listItems = paymentin.map((payin, index) =>
        <div className="transaction" key={index}>
            <div className="transaction-above">
                <p className="transaction-time">{MyFormat.getDateTime(payin.date_of_transaction)}</p>
                <p className="transaction-code">Trans code: {payin.transaction_id}</p>
            </div>
            <div className="transaction-below">
                <p className="transaction-status">{payin.transaction_type_name}</p>
                <p className="transaction-value">+{Intl.NumberFormat().format(payin.total_price)} VND</p>
            </div>
        </div>);
        return listItems;
    }

    const paymentOutContent = () => {
        const listItems = paymentout.map((payout, index) =>
        <div className="transaction" key={index}>
            <div className="transaction-above">
                <p className="transaction-time">{MyFormat.getDateTime(payout.date_of_transaction)}</p>
                <p className="transaction-code">Trans code: {payout.transaction_id}</p>
            </div>
            <div className="transaction-below">
                <p className="transaction-status">{payout.transaction_type_name}</p>
                <p className="transaction-value">{Intl.NumberFormat().format(payout.total_price)} VND</p>
            </div>
        </div>);
        return listItems;
    }

    const paymentAllContent = () => {
        const listItems = paymentall.map((paymentall, index) =>
        <div className="transaction" key={index}>
            <div className="transaction-above">
                <p className="transaction-time">{MyFormat.getDateTime(paymentall.date_of_transaction)}</p>
                <p className="transaction-code">Trans code: {paymentall.transaction_id}</p>
            </div>
            <div className="transaction-below">
                <p className="transaction-status">{paymentall.transaction_type_name}</p>
                <p className={paymentall.total_price >= 0 ? "transaction-value payin" : "transaction-value payout"}>{paymentall.total_price >= 0 && "+"}{Intl.NumberFormat().format(paymentall.total_price)} VND</p>
            </div>
        </div>);
        return listItems;
    }

    const handleSearchSubmit = (e) => {
        const obj = {
            id: searchInput
        }
        UserService.getUser(obj)
            .then((response) => {
                console.log(response.data);
            })
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const accountContent = () => {
        return <div className="account">
                <div className="account-header">
                    <p className="account-text">{account.account_number}</p>
                    <i className="fas fa-wallet account-icon"></i>
                </div>
                <div className="account-content">
                    <div className="accountcontent-inner">
                        <p className="account-label">Account name</p>
                        <p className="account-value name">{account.customer_name}</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Account number</p>
                        <p className="account-value">{account.account_number}</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Account opening date</p>
                        <p className="account-value">{account.date_become_customer}</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Balance</p>
                        <p className="account-value">{Intl.NumberFormat().format(account.total_asset)} VND</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Available balance</p>
                        <p className="account-value">{Intl.NumberFormat().format(account.total_asset)} VND</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Currency</p>
                        <p className="account-value">VND</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Identification</p>
                        <p className="account-value">{account.customer_citizen_identification}</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Phone</p>
                        <p className="account-value">{account.customer_phone}</p>
                    </div>
                    <div className="accountcontent-inner">
                        <p className="account-label">Address</p>
                        <p className="account-value">{account.customer_address}</p>
                    </div>
                </div>
            </div>
    }

    return (
        <MainLayout>
            <main className="paymentaccount-main">
                <div className="func">
                    <Title title="Payment Account" link="/home" />
                    <div className="container">
                        <div className="func-inner">
                            <div className="payment">
                                <div className="payment-nav">
                                    <div className="payment-func">
                                        <button className={tab === "payment-all" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-all")}>All</button>
                                        <button className={tab === "payment-in" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-in")}>In</button>
                                        <button className={tab === "payment-out" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-out")}>Out</button>
                                    </div>
                                    <div className="payment-search">
                                        <form className="paymentsearch-inner" onSubmit={handleSearchSubmit}>
                                            <button type="submit" className="search-button"><i className="fa fa-search search-icon"></i></button>
                                            <input type="text" placeholder="Search.." name="search" className="search-input" value={searchInput} onChange={handleInputChange}/>
                                        </form>
                                    </div>
                                </div>
                                <hr className="payment-line"/>
                                <div className="payment-content">
                                    <div id="payment-in" className="tabcontent payment-in">
                                        {tab === "payment-in" && paymentInContent()}
                                    </div>

                                    <div id="payment-out" className="tabcontent payment-out">
                                        {tab === "payment-out" && paymentOutContent()}
                                    </div>

                                    <div id="payment-all" className="tabcontent payment-all">
                                        {tab === "payment-all" && paymentAllContent()}
                                    </div>
                                </div>
                            </div>

                            {accountContent()}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default PaymentAccount;