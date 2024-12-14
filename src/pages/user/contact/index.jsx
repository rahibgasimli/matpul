import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";



const Contact = () => {

  const [disabledInput,setDisabledInput] = useState(false);
  const [notification, setNotification] = useState(false);

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault()
    setDisabledInput(true);
    emailjs.sendForm("service_joutsmm",
       "template_44400kg",
        form.current,
         "_SZuRs6Ic3oOmCJ2l")
      .then(res => {
        if (res.status === 200) {
          setDisabledInput(false)
          setNotification(true)
          setTimeout(() => setNotification(false),1000)
          form.current.fullname.value = "";
          form.current.useremail.value = "";
          form.current.subject.value = "";
          form.current.description.value = "";
        }
      });
  }

  return (
    <section id='contact'>
      {notification ? <div className="notification">
        Successfull
      </div>: null }
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-heading">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="contact-box">
              <div className="icon"><FaPhoneAlt /></div>
              <h3>Phone number</h3>
              <p>+994558557575</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="contact-box">
              <div className="icon"><MdEmail /></div>
              <h3>Email</h3>
              <a href='mailto:stargaming377@gmail.com'>stargaming377@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="contact-box">
              <div className="icon"><FaLocationArrow /></div>
              <h3>Location</h3>
              <p>Qələbə Residence, Abbas Mirzə Şərifzadə küç. 144, Bakı, Azərbaycan.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 contact-form">
            <form onSubmit={sendMail} ref={form}>
              <input type="text" id='fullname' name='fullname'
                placeholder='Your Full name...' required disabled={disabledInput}/>
              <br />
              <input type="email" id='useremail' name='useremail'
                placeholder='Your email address ....' required disabled={disabledInput}/>
              <br />
              <input type="text" id='subject' name='subject'
                placeholder='Enter Subject ....' required disabled={disabledInput}/>
              <br />
              <textarea id='description' name='description'
                placeholder='Enter Description ....' required disabled={disabledInput}/>
              <br />
              <input type="submit" disabled={disabledInput}/>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact