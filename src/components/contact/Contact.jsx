import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5w1q4of', 'template_kvi7lod', form.current, '4eNqrj6cVupulf9a1');
    e.target.reset();
  };

  return(
    <section id='contact'>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary '>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
