import "./ContactCard.scss";

import { useEffect, useState } from "react";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import SectionTitle from "../SectionTitle/SectionTitle";
import InputField from "./components/InputField";

function ContactCard() {
    const [input, setInput] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    // const handleValidation = () => {
    //     let _input = input;
    //     let errs = {};
    //     let formIsValid = true;

    //     //Name
    //     if (!_input["name"]) {
    //         formIsValid = false;
    //         errs["name"] = "Cannot be empty";
    //     }

    //     if (typeof _input["name"] !== "undefined") {
    //         if (!_input["name"].match(/^[a-zA-Z]+$/)) {
    //             formIsValid = false;
    //             errs["name"] = "Only letters";
    //         }
    //     }

    //     //Email
    //     if (!_input["email"]) {
    //         formIsValid = false;
    //         errs["email"] = "Cannot be empty";
    //     }

    //     if (typeof _input["email"] !== "undefined") {
    //         let lastAtPos = _input["email"].lastIndexOf("@");
    //         let lastDotPos = _input["email"].lastIndexOf(".");

    //         if (!(
    //             lastAtPos < lastDotPos &&
    //             lastAtPos > 0 &&
    //             _input["email"].indexOf("@@") == -1 &&
    //             lastDotPos > 2 &&
    //             _input["email"].length - lastDotPos > 2
    //         )) {
    //             formIsValid = false;
    //             errs["email"] = "Email is not valid";
    //         }
    //     }

    //     setInputError(errs);
    //     return formIsValid;
    // }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput({
            ...input,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        console.log(input);
    });

    return (
        <div id="contact" className="contact-card section">
            <div className="container">
                <div className="contact-inner">
                    <SectionTitle title="contact" />
                    <div className="contact-content">
                        <div className="contact-form">
                            <InputField
                                active={!input.name ? false : true}
                                name="name"
                                onChange={handleInputChange}
                                value={input.name}
                                tag="input"
                            />
                            <InputField
                                active={!input.subject ? false : true}
                                name="subject"
                                onChange={handleInputChange}
                                value={input.subject}
                                tag="input"
                            />
                            <InputField
                                active={!input.email ? false : true}
                                name="email"
                                onChange={handleInputChange}
                                value={input.email}
                                tag="input"
                            />
                            <InputField
                                active={!input.message ? false : true}
                                name="message"
                                onChange={handleInputChange}
                                value={input.message}
                                tag="textarea"
                            />
                            <button className="button" type="button">
                                Send
                            </button>
                        </div>
                        <GoogleMap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
