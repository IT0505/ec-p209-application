import MainLayout from '../../components/MainLayout';
import Title from '../../components/Title/Title';
import './CardRegister.scss';
import React, { useEffect, useState } from 'react';
import AccountService from '../../services/AccountService';
import RequestService from '../../services/RequestService';
import { useNavigate } from 'react-router-dom';


function CardRegister() {
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [type, setType] = useState();

    const [loaded, setLoaded] = useState(false);
    const [account, setAccount] = useState(null);
    const [cardExists, setCardExists] = useState({})

    // const [isDisabled, setIsDisabled] = useState({});

    const [checked, setChecked] = useState(false);

    const handleInputChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleRadioChange = (e) => {
        if(e.target.checked) {
            setType(e.target.value)
        }
    }

    const handleSubmit = () => {
        if(checked === 'Credit Card'){
            if(file == null)
                alert("Please upload your payroll image")
            else if(!file.name.match(/.(jpg|jpeg|png)$/i))
                alert("Please upload only image!")
        }
        if(checked && type) {
            AccountService.getAccountByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                const formdata = new FormData()
                formdata.append('card_type', type)
                formdata.append('account_number', response.data.account_number)
                formdata.append('image', file)
                console.log(file)
                RequestService.addRequest(formdata).then(response => {
                    if(response.data) {
                        alert(`Your card will be processed, please wait...`);
                        navigate('/cardmanager');
                    } else {
                        alert("Register FAILED!?!")
                    }
                })
            })
        } else alert("Check card type & policy to continue!");
    }

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }

    useEffect(() => {
        if(loaded === false) {
            AccountService.getAccountByCid({cid: sessionStorage.getItem("token")})
            .then((response) => {
                setAccount(response.data.account_number);
                RequestService.checkCard({accNum: response.data.account_number})
                .then((response) => {
                    setCardExists(response.data);
                    // handleDisabled(response.data);
                    setLoaded(true);
                })
            })
        }
    })

    // const handleDisabled = (data) => {
    //     let _isDisabled = {}
    //     if (data.debit_card || data.debit_request) _isDisabled["debit_card"] = true
    //     if (data.inter_debit_card || data.inter_debit_request) _isDisabled["inter_debit_card"] = true
    //     if (data.credit_card || data.credit_request)  _isDisabled["credit_card"] =true
    //     setIsDisabled(_isDisabled)
    // }

    return (
        <MainLayout>
            <main className="cardregister-main">
                <Title link="/cardmanager" title="Card Register"/>
                <div className="card-info">
                    <div className="container">
                        <div className="cardinfo-inner">
                            <p className="cardinfo-text text-upper">Card product: <b>TUB Online Banking</b></p>
                            <p className="cardinfo-text">Link account: <b>{account}</b></p>
                        </div>
                    </div>
                </div>
                <div className="card-wrap">
                    <div className="container">
                        <div className="cardwrap-inner">
                            <div className="card-type">
                                <form className="cardtype-form">
                                    <h3 className="title">Select card type:</h3>
                                    <input className="type-input" type="radio" value="Debit Card" name="card" id="debitcard" onChange={handleRadioChange} disabled={cardExists.debit_card || cardExists.debit_request ? true : false} />
                                    <label className="type-label" htmlFor="debitcard">Debit Card</label><br/>
                                    <input className="type-input" type="radio" value="International Debit Card" name="card" id="interdebitcard"  onChange={handleRadioChange}  disabled={cardExists.inter_debit_card || cardExists.inter_debit_request ? true : false} />
                                    <label className="type-label" htmlFor="interdebitcard">International Debit Card</label><br/>
                                    <input className="type-input" type="radio" value="Credit Card" name="card" id="creditcard"  onChange={handleRadioChange}  disabled={cardExists.credit_card || cardExists.credit_request ? true : false} />
                                    <label className="type-label" htmlFor="creditcard">Credit Card</label>
                                </form>
                            </div>
                            { type === "Credit Card" &&
                                <div className="credit-image">
                                    <h3 className="file-title">Please upload your image of your payroll</h3>
                                    <div className="file-form">
                                        <label className="fileinput-custom">
                                            <input type="file" name="file" accept="image/*" onChange={handleInputChange} />
                                            <p className='left-align'>{(file !== undefined && file !== null) ? file.name : "Click here to upload"}</p>
                                            <p className='right-align'>{(file !== undefined && file !== null) && (file.size/1024).toFixed(2) + 'KB'}</p>
                                        </label>
                                    </div>
                                </div>
                            }
                            <div className={type === "Credit Card" ? "card-policy last_item" : "card-policy"}>
                                <div className="cardpolicy-up">
                                    <input className="policy-input" type="checkbox" value="agreepolicy" name="policy" onChange={handleCheck}/>
                                    <label className="policy-label" htmlFor="policy">I have read, understand and agree with <a href="/">TUB Bank's Policy</a></label>
                                </div>
                                <div className="cardpolicy-down">
                                    <button className="policy-button" type="button" onClick={handleSubmit}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default CardRegister;