import React from 'react'
import './Footer.css'
import { images } from '../../images/images'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={images.logo}alt="" />
                <p>we’re passionate about crafting delicious, memorable meals using the freshest ingredients. Whether you're dining in or enjoying your favorites at home,
                     our menu is designed to satisfy every craving. Follow us on social media for updates on new dishes, special offers, and more. Thank you for choosing 
                    foodie—where every bite brings joy!"</p>
                <div className="footer-social-icons">
                    <img src={images.facebook_icon} alt=""  />
                    <img src={images.twitter_icon} alt=""  />
                    <img src={images.linkedin_icon} alt=""  />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+256 758029597</li>
                    <li>contact@food.com</li>
                </ul>
                
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Food.com  - All Right Reserved. </p>
    </div>
  )
}

export default Footer