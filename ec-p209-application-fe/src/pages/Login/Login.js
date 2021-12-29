import './Login.scss';
import logo from '../../assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';
import AccountService from '../../services/AccountService';
import MyFormat from '../../libs/MyFormat';

function Login(props) {

    let login = props.login;
    let isadmin = props.isadmin;
    let form;
    const navigate = useNavigate();
    const [err, setErr] = useState(null);

    const [inputLogin, setInputLogin] = useState({
        username: '',
        password: '',
    });

    const [inputRegister, setInputRegister] = useState({
        customer_name: '',
        customer_phone: '',
        customer_address: '',
        customer_citizen_identification: '',
        username: '',
        password: '',
        password_confirm: '',
    });

    const [errorLogin, setErrorLogin] = useState({
        username: null,
        password: null,
    })

    const [errorRegister, setErrorRegister] = useState({
        customer_name: null,
        customer_phone: null,
        customer_address: null,
        customer_citizen_identification: null,
        username: null,
        password: null,
        password_confirm: null,
    })

    const [loading, setLoading] = useState(false);

    const handleInputLoginChange = (e) => {
        let _data = { ...inputLogin };
        _data[e.target.id] = e.target.value;
        setInputLogin(_data);
    }

    const handleInputRegisterChange = (e) => {
        let _data = { ...inputRegister };
        _data[e.target.id] = e.target.value;
        setInputRegister(_data);
    }

    const loginValidation = () => {
        let dt = { ...inputLogin };
        let err = {};
        let formIsValid = true;

        //Name
        if(dt["username"].length < 5 || dt["username"].length > 16) {
            formIsValid = false;
            err["username"] = "Required 5 to 16 characters"
        }

        if (!dt["username"]) {
            formIsValid = false;
            err["username"] = "Cannot be empty";
        }

        //Password
        if(dt["password"].length < 8 || dt["password"].length > 25) {
            formIsValid = false;
            err["password"] = "Required 8 to 25 characters"
        }

        if (!dt["password"]) {
            formIsValid = false;
            err["password"] = "Cannot be empty";
        }

        // //Email
        // if (!dt["email"]) {
        //     formIsValid = false;
        //     err["email"] = "Cannot be empty";
        // }

        // if (typeof dt["email"] !== "undefined") {
        //     let lastAtPos = dt["email"].lastIndexOf("@");
        //     let lastDotPos = dt["email"].lastIndexOf(".");

        //     if (
        //         !(
        //             lastAtPos < lastDotPos &&
        //             lastAtPos > 0 &&
        //             dt["email"].indexOf("@@") == -1 &&
        //             lastDotPos > 2 &&
        //             dt["email"].length - lastDotPos > 2
        //         )
        //     ) {
        //         formIsValid = false;
        //         err["email"] = "Email is not valid";
        //     }
        // }

        setErrorLogin(err)
        return formIsValid;
    }

    const handleLoginSubmit = () => {
        if(loginValidation() === true)
        {
            try {
                UserService.checkLogin(inputLogin)
                    .then((response) => {
                        if (response.data.result === false) alert("Wrong username or password!!!")
                        else {
                            console.log(response.data);
                            if(response.data.user_token !== null && response.data.user_token !== "undefined" && isadmin !== true)
                            {                            
                                sessionStorage.setItem("token",response.data.user_token);
                                sessionStorage.setItem("role", "customer");
                                setLoading(true);
                                setTimeout(() => {
                                    window.location.reload();
                                }, 500)
                            } else {
                                if(response.data.admin_token !== null && response.data.admin_token !== "undefined" && isadmin === true) {
                                    sessionStorage.setItem("token", response.data.admin_token);
                                    sessionStorage.setItem("role", "admin");
                                    setLoading(true);
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 500)
                                } else alert("Wrong username or password!!!");
                            }
                        }
                    });
            } catch (e) {
                console.log(e);
            }
        }
        else console.log(errorLogin);
    }

    const registerValidation = () => {
        let dt = { ...inputRegister };
        let err = {};
        let formIsValid = true;

        //Name
        if(dt["username"].length < 5 || dt["username"].length > 16) {
            formIsValid = false;
            err["username"] = "Required 5 to 16 characters"
        }
        if (!dt["username"]) {
            formIsValid = false;
            err["username"] = "Field cannot be empty";
        }

        //Password
        if(dt["password"].length < 8 || dt["password"].length > 25) {
            formIsValid = false;
            err["password"] = "Required 8 to 25 characters"
        }
        if (!dt["password"]) {
            formIsValid = false;
            err["password"] = "Field cannot be empty";
        }

        if (dt["password_confirm"] !== dt["password"]) {
            formIsValid = false;
            err["password_confirm"] = "Password confirm not match";
        }
        if (!dt["password_confirm"]) {
            formIsValid = false;
            err["password_confirm"] = "Field cannot be empty";
        }

        if(dt["customer_citizen_identification"].length < 9 || dt["customer_citizen_identification"].length > 12) {
            formIsValid = false;
            err["customer_citizen_identification"] = "Required 9 to 12 characters"
        }
        if (typeof dt["customer_citizen_identification"] !== "undefined") {
            if (!dt["customer_citizen_identification"].match(/^[0-9]+$/)) {
                formIsValid = false;
                err["customer_citizen_identification"] = "Only letters are allowed";
            }
        }
        if (!dt["customer_citizen_identification"]) {
            formIsValid = false;
            err["customer_citizen_identification"] = "Field cannot be empty";
        }

        if (typeof dt["customer_name"] !== "undefined") {
            if (!dt["customer_name"].match(/^[a-zA-Z\s]*$/)) {
                formIsValid = false;
                err["customer_name"] = "Only letters are allowed";
            }
        }
        if (!dt["customer_name"]) {
            formIsValid = false;
            err["customer_name"] = "Field cannot be empty";
        }

        if(dt["customer_phone"].length < 9 || dt["customer_phone"].length > 12) {
            formIsValid = false;
            err["customer_phone"] = "Required 9 to 12 characters"
        }
        if (typeof dt["customer_phone"] !== "undefined") {
            if (!dt["customer_phone"].match(/^[0-9]+$/)) {
                formIsValid = false;
                err["customer_phone"] = "Only letters";
            }
        }
        if (!dt["customer_phone"]) {
            formIsValid = false;
            err["customer_phone"] = "Field cannot be empty";
        }

        if (!dt["customer_address"]) {
            formIsValid = false;
            err["customer_address"] = "Field cannot be empty";
        }

        setErrorRegister(err)
        return formIsValid;
    }
    const handleRegisterSubmit = () => {
        if(registerValidation()) {
            let dateStr = MyFormat.getNewDate();
            let customer = {
                customer_citizen_identification: inputRegister.customer_citizen_identification,
                customer_name: inputRegister.customer_name.toUpperCase(),
                customer_address: inputRegister.customer_address,
                customer_phone: inputRegister.customer_phone,
                date_become_customer: dateStr,
                customer_type: 'normal',
            }
            let user = {
                username: inputRegister.username,
                password: inputRegister.password,
                role: "customer",
                customer_citizen_identification: inputRegister.customer_citizen_identification
            }
            let account = {
                customer_citizen_identification: inputRegister.customer_citizen_identification,
                date_become_customer: dateStr
            }
            saveData(customer, user, account)
            // try {
            // } catch (err) {
            //     console.error(err)
            // }
        }
    }

    const saveData = (customer, user, account) => {
        CustomerService.addCustomer(customer)
        .then((response) => {
            if(response.data === true) {
                UserService.addUser(user)
                .then((response) => {
                    if(response.data === true) {
                        AccountService.addAccount(account)
                        .then((response) => {
                            if(response.data === true) {
                                setErr("none");
                            } else setErr("Fail to add Account");
                        })
                    } else setErr("Fail to add User");
                })
            } else setErr("Fail to add Customer");
        })
    }

    //eslint-disable-next-line
    useEffect(() => {
        if(err === "none") {
            alert("Register Success!!!");
            setErr(null);
            navigate("/login");
        } else {
            if(err !== null) {
                alert(err);
                setErr(null)
            }
        }
    })

    login ?
        form = <form className="logreg-form">
            <h3 className="logreg-header">Welcome to TUB OnlineBanking</h3>
            <input id="username" className="logreg-input" type="text" placeholder="Username" onChange={handleInputLoginChange} value={inputLogin.username} required></input>
            <span className="alert">{errorLogin.username}</span>
            <input id="password" className="logreg-input" type="password" placeholder="Password" onChange={handleInputLoginChange} value={inputLogin.password} required></input>
            <span className="alert">{errorLogin.password}</span>
            <div className="logreg-inner">
                <button className="logreg-button" type="button" onClick={handleLoginSubmit}>LOGIN</button>
                {isadmin===false && <a href="register" className="logreg-link">Don't have an account</a>}
            </div>
        </form>
        : form = <form className="logreg-form">
            <h3 className="logreg-header">Creating your online account</h3>
            <input className="logreg-input" id="customer_name" type="text" placeholder="Full Name" onChange={handleInputRegisterChange} value={inputRegister.customer_name}></input>
            <span className="alert">{errorRegister.customer_name}</span>
            <input className="logreg-input" id="customer_phone" type="text" placeholder="Phone Number" onChange={handleInputRegisterChange} value={inputRegister.customer_phone}></input>
            <span className="alert">{errorRegister.customer_phone}</span>
            <input className="logreg-input" id="customer_address" type="text" placeholder="Address" onChange={handleInputRegisterChange} value={inputRegister.customer_address}></input>
            <span className="alert">{errorRegister.customer_address}</span>
            <input className="logreg-input" id="customer_citizen_identification" type="text" placeholder="Citizen Identification" onChange={handleInputRegisterChange} value={inputRegister.customer_citizen_identification}></input>
            <span className="alert">{errorRegister.customer_citizen_identification}</span>
            <input className="logreg-input" id="username" type="text" placeholder="Username" onChange={handleInputRegisterChange} value={inputRegister.username}></input>
            <span className="alert">{errorRegister.username}</span>
            <input className="logreg-input" id="password" placeholder="Password" type="password" onChange={handleInputRegisterChange} value={inputRegister.password}></input>
            <span className="alert">{errorRegister.password}</span>
            <input className="logreg-input" id="password_confirm" placeholder="Confirm Password" type="password" onChange={handleInputRegisterChange} value={inputRegister.password_confirm}></input>
            <span className="alert">{errorRegister.password_confirm}</span>
            <div className="logreg-inner">
                <button className="logreg-button" type="button" onClick={handleRegisterSubmit}>REGISTER</button>
                <a href="login" className="logreg-link">Already have an account</a>
            </div>
        </form>

    return (
        <main className="logreg-main">
            {loading && <div className="loader"></div>}
            <figure className="logo img">
                <img src={logo} alt="" className=""></img>
            </figure>
            <div className="container">
                {form}
            </div>
        </main>
    );
}

export default Login;