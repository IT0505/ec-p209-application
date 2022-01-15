import './ContactCard.scss'

import { useEffect, useState } from 'react'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import SectionTitle from '../SectionTitle/SectionTitle';

function ContactCard() {

    const [input, setInput] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    })

    const inputContents = [
        {
            type: 'input',
            name: 'name',
        },
        {
            type: 'input',
            name: 'subject',
        },
        {
            type: 'input',
            name: 'email',
        },
        {
            type: 'textarea',
            name: 'message',
            rows: 3
        }
    ]

    const handleInputChange = (e) => {
        const value = e.target.value
        setInput({
            ...input,
            [e.target.name]: value
        })
    }

    useEffect(() => {
        console.log(input)
    })

    const inputView = () => {
        return (
            <div className="contact-form">
                {inputContents.map((data, index) =>
                    <div className="input-field" key={index}>
                        <label className="label">{data.name}</label><br />
                        {
                            data.type === 'input'
                            ? <input type="text" className="input" name={data.name} onChange={handleInputChange} value={input[data.name]}></input>
                            : <textarea type="text" rows={data.rows} className="input textarea" name={data.name} onChange={handleInputChange} value={input[data.name]}></textarea>
                        }
                    </div>
                )}
                <button className="button" type="button">Send</button>
            </div>
        )
    }

    return (
        <div id="contact" className="contact-card section">
            <div className="container">
                <div className="contact-inner">
                    <SectionTitle title="contact" />
                    <div className="contact-content">
                        {inputView()}
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;