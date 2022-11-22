import './ContactCard.scss';

import { useState } from 'react';
import GoogleMap from '../../../../components/GoogleMap/GoogleMap';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import InputField from './components/InputField/InputField';

function ContactCard() {
  const [input, setInput] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  return (
    <div id='contact' className='contact-card section'>
      <div className='container'>
        <div className='contact-inner'>
          <SectionTitle title='contact' />
          <div className='contact-content'>
            <div className='contact-form'>
              <InputField
                active={!input.name ? false : true}
                name='name'
                onChange={handleInputChange}
                value={input.name}
                inputType='input'
              />
              <InputField
                active={!input.subject ? false : true}
                name='subject'
                onChange={handleInputChange}
                value={input.subject}
                inputType='input'
              />
              <InputField
                active={!input.email ? false : true}
                name='email'
                onChange={handleInputChange}
                value={input.email}
                inputType='input'
              />
              <InputField
                active={!input.message ? false : true}
                name='message'
                onChange={handleInputChange}
                value={input.message}
                inputType='textarea'
              />
              <button className='button' type='button'>
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
