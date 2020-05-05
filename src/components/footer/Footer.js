/* ------------ main imports ------------ */
import React from 'react'


/* ------------ other imports ------------ */
import { SocialIcon } from 'react-social-icons'


/* ------------ style ------------ */
import './Footer.css'


export default function Footer() {
    return (
        <footer className="footerSection">
            <div className="footerContainer">
                <section className="socialMediaConatiner">
                    <SocialIcon network="facebook" />
                    <SocialIcon network="linkedin" />
                    <SocialIcon network="youtube" />
                    <SocialIcon network="email" />
                </section>
                <ul className="footerLinks">
                    <li><a>Sales</a></li>
                    <span className="dot"></span>
                    <li><a>Support</a></li>
                    <span className="dot"></span>
                    <li><a>Sales</a></li>
                    <br/>
                    <li><a>Terms of Use</a></li>
                    <span className="dot"></span>
                    <li><a>Privacy Policy</a></li>
                </ul>
                <section className="footerCopyright">
                    <p>Copyright ©2020 Kamshed, Inc.</p>
                </section>
            </div>
        </footer>
    )
}