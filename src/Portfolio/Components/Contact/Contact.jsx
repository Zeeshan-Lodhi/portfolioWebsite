import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import address from '../../img/address-min.png'
import email from '../../img/email-min.png'
import phone from '../../img/phone-min.png'
import emailjs from 'emailjs-com'
import Aos from 'aos'
const Contact = () => {
    useEffect(() => {
        // eslint-disable-next-line
        Aos.init({ duration: 2000 })
    }, [])

    const [text, settext] = useState({
        user_name: "",
        user_email: "",
        user_subject: "",
        message: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        settext((preState) => {
            return { ...preState, [name]: value, }
        })
    }


    const formRef = useRef()
    const submitForm = (e) => {
        e.preventDefault()

        emailjs.sendForm('Your servise id', 'Template id', formRef.current, 'key')
            .then((result) => {
            }, (error) => {
            });
        settext({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
            // loading: true
        })
    }

    return (
        <>
            <div className="contact" id='Contact_Section'>
                <div className="c-left" data-aos="fade-left">
                    <div className="c-bg"></div>
                    <div className="c-wrapper">
                        {/* Left side of the contact page */}
                        <h1 className='c-title'>Let's discuss your project</h1>
                        <div className="logos">
                            <a href="tel:+92328324188" style={{ textDecoration: "none", color: "black" }}>
                                <div className="contact-info">
                                    <img src={phone} alt="" className='add-logo' />
                                    +92328324188
                                </div>
                            </a>

                            <a href="mailto:zeshanlodhi24@gmail.com" style={{ textDecoration: "none", color: "black" }}>
                                <div className="contact-info">
                                    <img src={email} alt="" className='add-logo' />
                                    zeshanlodhi24@gmail.com
                                </div>
                            </a>

                            <div className="contact-info">
                                <img src={address} alt="" className='add-logo' />
                                Gujrat, pakistan
                            </div>

                        </div>
                    </div>
                </div>


                <div className="c-right">
                    <p className="c-desc w-100">What’s your story? Get in touch.</p>
                    <form onSubmit={submitForm} ref={formRef} method="post">
                        <input type="text" required placeholder="Name" onChange={InputEvent} name="user_name" value={text.user_name} />
                        <input type="email" required placeholder="Email id" onChange={InputEvent} name="user_email" value={text.user_email} />
                        <input type="text" required placeholder="Subject" onChange={InputEvent} name="user_subject" value={text.user_subject} />
                        <textarea rows="5" required placeholder="Message" onChange={InputEvent} name="message" value={text.message} />
                        <button className='contact-btn'>Email Now</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact