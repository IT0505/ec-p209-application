import MainLayout from '../../components/MainLayout';
import './AdminMain.scss';
import React, { useState, useEffect } from 'react';
import background from '../../assets/images/btcbg.jpg';
import RequestService from '../../services/RequestService';
import AccountService from '../../services/AccountService';
import TransactionService from '../../services/TransactionService';
import MyFormat from '../../libs/MyFormat';
import StaffService from '../../services/StaffService'

function Home() {
    const [tab, setTab] = useState("pendings");
    const [loaded, setLoaded] = useState(false);
    const [toggle, setToggle] = useState(false);

    const [pendings, setPendings] = useState([
        // {
        //     accountname: "Tran Van A",
        //     cardtype: "Credit Card"
        // }
    ])

    const [accounts, setAccounts] = useState([
        // {
        //     accountname: "Tran Van A",
        //     balance: 90000000
        // },
        // {
        //     accountname: "Nguyen Van B",
        //     balance: 50000000
        // },
        // {
        //     accountname: "Le Van C",
        //     balance: 60000000
        // }
    ])

    const [account, setAccount] = useState({})

    const [transactions, setTransactions] = useState([
        {
        //     paymentaccount: "Tran Van A",
        //     paymentvalue: 9000000000,
        //     paymentdate: "21/12/2019 09:30:13"
        // },
        // {
        //     paymentaccount: "Tran Van A",
        //     paymentvalue: -9000000000,
        //     paymentdate: "21/12/2019 09:30:13"
        }
    ])

    const [staffs, setStaffs] = useState([{}])

    //eslint-disable-next-line
    useEffect(() => {
        if(loaded===false) {
            RequestService.getAll()
            .then(response =>{
                setPendings(response.data)
            })
            AccountService.getAll()
            .then(response => {
                setAccounts(response.data)
            })
            TransactionService.getAll()
            .then(response => {
                setTransactions(response.data);
            })
            TransactionService.getAll()
            .then(response => {
                setTransactions(response.data);
            })
            StaffService.getAll()
            .then(response => {
                setStaffs(response.data);
            })
            setLoaded(true)
        }
    })

    const handleToggle = (cid) => {
        if(toggle) setToggle(false);
        else {
            AccountService.getAccountByCid({cid: cid})
            .then(response => {
                setAccount(response.data)
            })
            setToggle(true)
        }
    }
    const pendingsContent = () => {
        const listItems = pendings.map((pending, index) =>
        <div className="grid-container pending" key={index}>
            <p className="grid-item name">{pending.customer_name}</p>
            <p className="grid-item">{pending.card_type}</p>
            <a className="grid-item final link" href={"/cardrequest/"+pending.request_id}>Details<i className="fas fa-angle-right arrow"></i></a>
            <hr className="table-line"/>
        </div>);
        return listItems;
    }

    const accountsContent = () => {
        const listItems = accounts.map((account, index) =>
        <div className="grid-container account" key={index}>
            <p className="grid-item">{account.account_number}</p>
            <p className="grid-item name">{account.customer_name}</p>
            <p className="grid-item">{Intl.NumberFormat().format(account.total_asset)} VND</p>
            <button className="grid-item final link" onClick={() => handleToggle(account.customer_citizen_identification)}>Details<i className="fas fa-angle-right arrow"></i></button>
            <hr className="table-line account"/>
        </div>);
        return listItems;
    }

    const transactionsContent = () => {
        const listItems = transactions.map((transaction, index) =>
        <div className="grid-container" key={index}>
            <p className="grid-item">{transaction.account_number}</p>
            <p className={transaction.total_price>=0 ? "grid-item in" : "grid-item out"}>{transaction.total_price>=0 && "+"}{Intl.NumberFormat().format(transaction.total_price)} VND</p>
            <p className="grid-item final date">{MyFormat.getDateTime(transaction.date_of_transaction)}</p>
            <hr className="table-line"/>
        </div>);
        return listItems;
    }

    const staffsContent = () => {
        const listItems = staffs.map((staffs, index) =>
        <div className="grid-container staff" key={index}>
            <p className="grid-item">{staffs.staff_name}</p>
            <p className="grid-item">{staffs.staff_position}</p>
            <p className="grid-item">{staffs.staff_citizen_identification}</p>
            <p className="grid-item">{staffs.staff_phone}</p>
            <p className="grid-item final">{staffs.staff_address}</p>
            <hr className="table-line staff"/>
        </div>);
        return listItems;
    }

    const accountDetailContent = () => {
        const item =
        <div className="account-detail">
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
        return item;
    }

    return (
        <MainLayout>
            <main className="admin-main">
                <figure className="banner img">
                    <img src={background} alt="" className=""></img>
                </figure>
                <div className="main-inner">
                    <div className="func">
                        <div className="container">
                            <div className="func-inner">
                                <div className="admin-func">
                                    <button className={tab === "pendings" ? "tablinks active" : "tablinks"} onClick={() => setTab("pendings")}>Pendings</button>
                                    <button className={tab === "accounts" ? "tablinks active" : "tablinks"} onClick={() => setTab("accounts")}>Accounts</button>
                                    <button className={tab === "transactions" ? "tablinks active" : "tablinks"} onClick={() => setTab("transactions")}>Transactions</button>
                                    <button className={tab === "staffs" ? "tablinks active" : "tablinks"} onClick={() => setTab("staffs")}>Staffs</button>
                                </div>
                                <div className="pendings" style={tab==="pendings" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container pending">
                                            <h3 className="grid-item">Account's name</h3>
                                            <h3 className="grid-item">Card type</h3>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {pendingsContent()}
                                    </div>
                                </div>
                                <div className="accounts" style={tab==="accounts" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container account">
                                            <h3 className="grid-item">Account's number</h3>
                                            <h3 className="grid-item">Account's name</h3>
                                            <h3 className="grid-item">Balance</h3>
                                            <h3 className="grid-item final">Total: {accounts.length}</h3>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {accountsContent()}
                                    </div>
                                </div>
                                <div className="transactions" style={tab==="transactions" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container">
                                            <h3 className="grid-item">Payment account</h3>
                                            <h3 className="grid-item">Payment amount</h3>
                                            <h3 className="grid-item final">Date of payment</h3>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {transactionsContent()}
                                    </div>
                                </div>
                                <div className="staffs" style={tab==="staffs" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container staff">
                                            <h3 className="grid-item">Name</h3>
                                            <h3 className="grid-item">Positions</h3>
                                            <h3 className="grid-item">Identification</h3>
                                            <h3 className="grid-item">Phone</h3>
                                            <h3 className="grid-item final">Address</h3>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {staffsContent()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {toggle && accountDetailContent()} */}
                </div> 
                {toggle && <div id="myModal" className="modal">
                        <span className="close" onClick={handleToggle}>&times;</span>
                        {accountDetailContent()}
                    </div> }
        </main>
    </MainLayout>
    );
}

export default Home;
