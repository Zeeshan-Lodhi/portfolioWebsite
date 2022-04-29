import React, { useEffect, useState } from 'react'
import './intro.css'
import vid1 from '../../img/vid2 (1).mp4'
import me from '../../img/me3.png'
import Typewriter from 'typewriter-effect'
import 'aos/dist/aos.css'
import Aos from 'aos'
import cv from './ZeeshanLodhi.pdf'
const Intro = () => {

    // Scroll to top logic
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    useEffect(() => {
        // eslint-disable-next-line
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>

            {/* For Whatsapp button */}
            <a href="https://wa.me/03328324188" className="whatsapp_float" rel="noreferrer" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
            {/* For sidebar socail media menu */}
            <div className="sticky-social ">
                <ul className="social">
                    <li className="fb">
                        <a href="https://www.facebook.com/zeeshan.lodhi.35977" target="_blank" rel="noreferrer">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="github">
                        <a href="https://github.com/Zeeshan-Lodhi/" target='_blank' rel="noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="insta"><a href="https://www.instagram.com/zeeshan__lodhi/" target='_blank' rel="noreferrer">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    </li>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/zeeshan-lodhi-7a7670217/" target='_blank' rel="noreferrer">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    </li>

                </ul>
            </div>

            {/* Heres start the homepage */}
            <div className="intro" id='/'>
                <video src={vid1} loop muted autoPlay ></video>
                <div className="intro-left" data-aos="fade-left">
                    <div className='left-wrapper'>
                        <h1 className='intro-name'>Grow Your Business With,</h1>
                        <p className='intro-name2 '>Zeeshan  Lodhi</p>
                        <div className='d-flex title-item-wrapper'>
                            {/* TypeWrite effect animation*/}
                            <h1 className='skill'>I am a, </h1>
                            <div className="title-item">
                                <Typewriter
                                    options={{
                                        strings: ['Web Devolper💻', 'MERN Devolper💻', 'CS Student😀'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 1
                                    }}
                                />
                            </div>
                        </div>
                        <a href={cv} download className='cv_A' style={{ width: "fit-content" }}>
                            <div className="button2 btn">Download CV ⬇️</div>
                        </a>
                    </div>
                </div>

                {/* Scroll to top button */}
                <div className='scrollToTop' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                    <i className="fa fa-arrow-up arrow-icon" aria-hidden="true"></i>
                </div>
                {/* Right side of the intro page */}
                <div className="intro-right" data-aos="fade-right">
                    <div className="right-bg"></div>
                    <img src={me} alt="" className='right-img' />
                </div>
            </div>
        </>
    )
}

export default Intro