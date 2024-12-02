import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { images } from '../../images/images'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={images.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" id="" required />
                <p>By continuing , i agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"?
            <p>create a new account?<span onClick={()=>setCurrState("Sig Up")}>Click here</span></p>
            :<p>Already hav an accunt? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }   
        </form>
    </div>
  )
}

export default LoginPopup