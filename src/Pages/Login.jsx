import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import {RiLockPasswordLine} from "react-icons/ri"

export default function Login(props) {
  const [loginID, setLoginID] = useState("");
  const [loginParol, setLoginParol] = useState("");
  
  const handleLoginID = (e)=>{
    setLoginID(e.target.value)
  }

  const handleLoginParol = (e)=>{
    setLoginParol(e.target.value)
  }

  return (
    <div className="login-page">
      <h1>Tizimga kirish</h1>
      <div className="login-card">
        <div className="login-id">Login ID</div>
        <BsPerson style={{position:"absolute", top:"296px", left:"548px", fontSize:"24px"}} />
        <input
          type="text"
          className="login-id-input"
          placeholder="Loginni kiriting"
          onChange={handleLoginID}
        />
        <div className="login-parol">Parol</div>
        <RiLockPasswordLine style={{position:"absolute", top:"421px", left:"548px", fontSize:"24px"}} />
        <input
          type="password"
          className="login-parol-input"
          placeholder="Parolni kiriting"
          onChange={handleLoginParol}
        />
        <div className="contact-admin" >Akkauntingiz yo'q bo'lsa yoki parolni esdan chiqargan bo'lsangiz <a href="#">Admin</a>ga murojaat qiling   </div>
      </div>
      <button className="login-btn">KIRISH</button>
    </div>
  );
}
