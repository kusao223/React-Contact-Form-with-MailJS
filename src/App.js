import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
function App() { 
  const form = useRef();
  const sendEmail = (e) => { e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => { 
        alert('message sent successfully...');
        console.log(result.text);
      }, (error) => { console.log(error.text); }
      );
    }; 
  return ( 
    <div>
      <h1>Contact Form</h1>
      <form className='cf' ref={form} onSubmit={sendEmail}>
      <div className='half left cf'> 
          <input type='text' placeholder='Name' name='to_name' />
          <input type='email' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='message'>
          </textarea>
        </div> 
        <input type='submit' value='Submit' id='input-submit' /> 
      </form> 
    </div> 
  );
} 
export default App;