import './Store.scss';
import logo from '../../assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import TransactionService from '../../services/TransactionService'
import MyFormat from '../../libs/MyFormat';
import CardService from '../../services/CardService'

function Store() {

    //const [loading, setLoading] = useState(false);
    const [inputPayment, setInputPayment] = useState({
        accountname: "",
        cardnumber: "",
        paymentamount: "",
        type: null,
    });

    const [errorPayment, setErrorPayment] = useState({
    })

    const handleRadioChange = (e) => {
        let _data = {...inputPayment};
        if(e !== undefined) {
            _data["type"] = e.target.value;
            setInputPayment(_data);
        }
    }
    const handleInputPaymentChange = (e) => {
        let _data = { ...inputPayment };
        _data[e.target.id] = e.target.value.toUpperCase();
        handleRadioChange()
        setInputPayment(_data);
    }

    const paymentValidation = () => {
        let dt = { ...inputPayment };
        let err = {};
        let formIsValid = true;

        if (typeof dt["accountname"] !== "undefined") {
            if (!dt["accountname"].match(/^[a-zA-Z\s]*$/)) {
                formIsValid = false;
                err["accountname"] = "Only letters are allowed";
            }
        }
        if (!dt["accountname"]) {
            formIsValid = false;
            err["accountname"] = "Field cannot be empty";
        }

        // if(dt["accountnumber"].length !== 14) {
        //     formIsValid = false;
        //     err["accountnumber"] = "Required 14 characters"
        // }
        // if (typeof dt["accountnumber"] !== "undefined") {
        //     if (!dt["accountnumber"].match(/^[0-9]+$/)) {
        //         formIsValid = false;
        //         err["accountnumber"] = "Only numeric values are allowed";
        //     }
        // }
        // if (!dt["accountnumber"]) {
        //     formIsValid = false;
        //     err["accountnumber"] = "Field cannot be empty";
        // }

        if(dt["cardnumber"].length !== 16) {
            formIsValid = false;
            err["cardnumber"] = "Required 16 characters"
        }
        if (typeof dt["cardnumber"] !== "undefined") {
            if (!dt["cardnumber"].match(/^[0-9]+$/)) {
                formIsValid = false;
                err["cardnumber"] = "Only numeric values are allowed";
            }
        }
        if (!dt["cardnumber"]) {
            formIsValid = false;
            err["cardnumber"] = "Field cannot be empty";
        }

        if (typeof dt["paymentamount"] !== "undefined") {
            if (!dt["paymentamount"].match(/^[0-9]+$/)) {
                formIsValid = false;
                err["paymentamount"] = "Only numeric values are allowed";
            }
        }
        if (!dt["paymentamount"]) {
            formIsValid = false;
            err["paymentamount"] = "Field cannot be empty";
        }

        if(!dt["type"]) {
            formIsValid = false;
            err["type"] = "Choose card type";
        }
        setErrorPayment(err)

        return formIsValid;
    }

    const handlePaymentSubmit = () => {
        if(paymentValidation()) {
            let transaction = {
                date_of_transaction: MyFormat.getNewDateTime(),
                total_price: -inputPayment.paymentamount,
            };
            let transactionAttribute;
            let typeCode;
            if(inputPayment.type === "creditcard") {
                transactionAttribute = {credit_card_id: inputPayment.cardnumber};
                typeCode = 5;

                CardService.getCardInfo(transactionAttribute)
                .then(response => {
                    if(response.data.customer_name === inputPayment.accountname.toUpperCase()) {
                        transaction = {...transaction, ...transactionAttribute, transaction_type_code: typeCode}
                        TransactionService.addTransaction(transaction)
                        .then(response => {
                            if(response.data) alert("Transaction SUCCESS!!!")
                            else alert("Your credit card is over-limited!!!")
                        })
                    } else alert("Please check your info again\nor check if you have created a online card!")
                })
            } else {
                transactionAttribute = {debit_card_id: inputPayment.cardnumber}
                inputPayment.type === "debitcard" ? typeCode = 3 : typeCode = 4;
                
                CardService.getCardInfo(transactionAttribute)
                .then(response => {
                    let debitType ;
                    response.data.debit_type_code === 1 ? debitType = "debitcard" : debitType = "interdebitcard"
                    if(response.data.customer_name === inputPayment.accountname.toUpperCase() && inputPayment.type === debitType) {
                        transaction = {...transaction, ...transactionAttribute, transaction_type_code: typeCode}
                        TransactionService.addTransaction(transaction)
                        .then(response => {
                            if(response.data) alert("Transaction SUCCESS!!!")
                            else alert("Your balance is not enough!!!")
                        })
                    } else alert("Please check your info again\nor check if you have created a online card!")
                })
            }
        }
    }

    //eslint-disable-next-line
    useEffect(() => {
        // console.log(inputPayment)
    })

    const formContent = () => {
        return <form className="payment-form">
                <h3 className="payment-header">Buy something at TUB</h3>
                <input id="accountname" className="payment-input" type="text" placeholder="Account's name" onChange={handleInputPaymentChange} value={inputPayment.accountname} required></input>
                <span className="alert">{errorPayment.accountname}</span>
                <input id="cardnumber" className="payment-input" type="text" placeholder="Card number (no space between)" onChange={handleInputPaymentChange} value={inputPayment.cardnumber} required></input>
                <span className="alert">{errorPayment.cardnumber}</span>

                <h3 className="type-title">Select card type:</h3>
                <label className="type-label" htmlFor="debitcard">
                    <input className="type-input" type="radio" value="debitcard" name="card" id="debitcard" onChange={handleRadioChange}/> Debit Card
                </label>
                <label className="type-label" htmlFor="interdebitcard">
                    <input className="type-input" type="radio" value="interdebitcard" name="card" id="interdebitcard"  onChange={handleRadioChange}/> International Debit Card
                </label>
                <label className="type-label" htmlFor="creditcard">
                    <input className="type-input" type="radio" value="creditcard" name="card" id="creditcard"  onChange={handleRadioChange}/> Credit Card
                </label>
                <span className="alert">{errorPayment.type}</span>

                <input id="paymentamount" className="payment-input" type="text" placeholder="Payment amount" onChange={handleInputPaymentChange} value={inputPayment.paymentamount} required></input>
                <span className="alert">{errorPayment.paymentamount}</span>
                
                <button className="payment-button" type="button" onClick={handlePaymentSubmit}>SUBMIT</button>
        </form>
    }
    return (
        <main className="payment-main">
            {/* {loading && <div className="loader"></div>} */}
            <figure className="logo img">
                <img src={logo} alt="" className=""></img>
            </figure>
            <div className="container">
                {formContent()}
            </div>
        </main>
    );
}

export default Store;