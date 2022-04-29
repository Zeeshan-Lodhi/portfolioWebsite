import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <footer id="site-footer">
                <section className="horizontal-footer-section" id="footer-middle-section">
                    <div id="footer-about" className="footer-columns footer-columns-large">
                        <h1>Contact Us</h1>
                        <address >
                            <a href="tel:+92328324188" >
                                <p className='my-2' style={{ fontWeight: "200" }}><img alt='' src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />+92328324188</p>
                            </a>
                            <a href="mailto:zeshanlodhi24@gmail.com" >
                                <p className='my-3 ' style={{ fontWeight: "200" }}><img alt='' src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />zeshanlodhi24@gmail.com</p>
                            </a>
                            <p style={{ fontWeight: "200" }}><img alt='' src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />Gujrat, pakistan</p>
                        </address>
                    </div>
                    <div className="footer-columns">
                        <h1>Quick Links</h1>
                        <ul className="footer-column-menu" role="menu">
                            <li className="footer-column-menu-item" role="menuitem">
                                <a href="#About_Section" className="footer-column-menu-item-link">About us </a>
                            </li>
                            <li className="footer-column-menu-item" role="menuitem">
                                <a href="#Projects_Section" className="footer-column-menu-item-link">Projects</a>
                            </li>
                            <li className="footer-column-menu-item" role="menuitem">
                                <a href="#Skills_Section" className="footer-column-menu-item-link">Skills</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="horizontal-footer-section" id="footer-bottom-section">
                    <div id="footer-copyright-info">
                        Zeeshan Lodhi 2022 &copy; All right reserved
                    </div>
                    <div id="footer-social-buttons">
                        <a href="https://www.facebook.com/zeeshan.lodhi.35977" target="_blank" rel="noreferrer">
                            <img alt='' src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />

                        </a>
                        <a href="https://www.linkedin.com/in/zeeshan-lodhi-7a7670217/" target='_blank' rel="noreferrer">
                            <img alt='' src="https://img.icons8.com/ios-filled/25/999999/linkedin--v1.png" />
                        </a>

                        <a href="https://github.com/Zeeshan-Lodhi/" target='_blank' rel="noreferrer">
                            <img alt='' src="https://img.icons8.com/ios-filled/25/999999/github--v1.png" />
                        </a>

                        <a href="https://www.instagram.com/zeeshan__lodhi/" target='_blank' rel="noreferrer">
                            <img alt='' src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
                        </a>
                    </div>
                </section>

            </footer>

        </>
    )
}

export default Footer