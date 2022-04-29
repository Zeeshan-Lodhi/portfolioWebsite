import React, { useEffect } from 'react'
import './about.css'
import about from '../../img/about2-min.jpg'
import cert from '../../img/cert-min.jpg'
import Aos from 'aos'
const About = () => {
    useEffect(() => {
        // eslint-disable-next-line
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="about" id='About_Section'>
                <div className="a-left"
                    data-aos="fade-left"
                >
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={about} alt="" className='a-img' />
                    </div>
                </div>


                <div className="a-right container "
                    data-aos="fade-right"
                >

                    <h1 className='mt-2 about-head'>ABOUT ME</h1>
                    <p className='mt-2 about-para'>Hello, My Name Is Zeeshan Lodhi, Lives in Gujrat, Pakistan . Currently I am Doing BSCS At Universty Of Gujrat H.H.Campus.
                    </p>
                    <div className='d-flex flex-row-reverse align-items-center mt-3'>
                        <p className='about-para mx-5 cert-para'>Certified From Udemy As a Frontend Devolper On May 2, 2021. </p>
                        <img src={cert} alt="" className='certImg' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default About