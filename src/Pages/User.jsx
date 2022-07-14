import HomeBtn from "../Media/Homehome.svg";
import AddUserBtn from "../Media/Add useraddUser.svg";
import SuperBtn from "../Media/Userssuper.svg";
import SettingsBtn from "../Media/Settings.svg";
import { Link } from "react-router-dom";
import "../Admin.css";
import { useState } from "react";
export default function User(props) {
  const selectedPage = props.selectedPage;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [pasport, setPasport] = useState("");
  const [adress, setAdress] = useState("");
  const [inviteID, setInviteID] = useState(0);
  const [maneygiven, setMoneygiven] = useState(0);
  const [moneyToGive, setMoneyToGive] = useState(0);

  const HandleName = (e) => {
    setName(e.target.value);
  };

  const HandleSurName = (e) => {
    setSurname(e.target.value);
  };

  const HandlePhone = (e) => {
    setPhone(e.target.value);
  };

  const HandlePasport = (e) => {
    setPasport(e.target.value);
  };

  const HandleAdress = (e) => {
    setAdress(e.target.value);
  };

  const HandleInviteID = (e) => {
    setInviteID(e.target.value);
  };

  const HandleMoneygiven = (e) => {
    setMoneygiven(e.target.value);
  };

  const HandleMoneyToGive = (e) => {
    setMoneyToGive(e.target.value);
  };

  return (
    <div className="admin-home">
      <div className="admin-menu">
        <Link to="/">
          <div
            className="menu-btn"
            style={
              selectedPage === "home"
                ? { backgroundColor: "rgb(229, 229, 228)" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              props.SelectPage("home");
            }}
          >
            <img src={HomeBtn} className="menu-svg" alt="" />
          </div>
        </Link>
        <Link to="/user">
          <div
            className="menu-btn"
            style={
              selectedPage === "user"
                ? { backgroundColor: "rgb(229, 229, 228)" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              props.SelectPage("user");
            }}
          >
            <img src={AddUserBtn} className="menu-svg" alt="" />
          </div>
        </Link>
        <Link to="/superuser">
          <div
            className="menu-btn"
            style={
              selectedPage === "super"
                ? { backgroundColor: "rgb(229, 229, 228)" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              props.SelectPage("super");
            }}
          >
            <img src={SuperBtn} className="menu-svg" alt="" />
          </div>
        </Link>
        <Link to="/settings">
          <div
            className="menu-btn"
            style={
              selectedPage === "settings"
                ? { backgroundColor: "rgb(229, 229, 228)" }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              props.SelectPage("settings");
            }}
          >
            <img src={SettingsBtn} className="menu-svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="add-user-card">
        <h1> Foydalanuvchi qo'shish </h1>
        <div className="add-user-left">
          <div className="add-user-sub">Ism:</div>
          <div className="add-user-sub-right">
            <input type="text" placeholder="ism" className="add-user-input" onChange={HandleName} />
          </div>
          <div className="add-user-sub">Familiya:</div>
          <div className="add-user-sub-right">
            <input
              type="text"
              placeholder="familiya"
              className="add-user-input"
              onChange={HandleSurName}
            />
          </div>
          <div className="add-user-sub">Telefon raqami:</div>
          <div className="add-user-sub-right">
            <input
              type="text"
              placeholder="telefon"
              className="add-user-input"
              onChange={HandlePhone}
            />
          </div>
          <div className="add-user-sub">Pasport seriyasi:</div>
          <div className="add-user-sub-right">
            <input
              type="text"
              placeholder="pasport seriyasi"
              className="add-user-input"
              onChange={HandlePasport}
            />
          </div>
          <div className="add-user-sub">Yashash manzili:</div>
          <div className="add-user-sub-right">
            <input
              type="text"
              placeholder="yashash manzili"
              className="add-user-input"
              onChange={HandleAdress}
            />
          </div>
          <div className="add-user-sub">Taklif qiluvchi IDsi:</div>
          <div className="add-user-sub-right">
            <input type="text" placeholder="ID" className="add-user-input" onChange={HandleInviteID} />
          </div>
        </div>
        <div className="add-user-right">
          <div className="add-right-1"> To'lanadigan pul: </div>
          <div className="add-right-2">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
            />{" "}
          </div>
          <div className="add-right-3">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
            />{" "}
          </div>
          <div className="add-right-1"> </div>
          <div className="add-right-2">
            {" "}
            <input
              type="text"
              placeholder="kurs"
              className="add-user-input-2"
              style={{ background: "white" }}
            />{" "}
          </div>
          <div className="add-right-3">
            {" "}
            <input
              type="text"
              placeholder="kurs"
              className="add-user-input-2"
              style={{ background: "white" }}
            />{" "}
          </div>
          <div className="add-right-1"> </div>
          <div className="add-right-2">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
            />{" "}
          </div>
          <div className="add-right-3">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
            />{" "}
          </div>
          <div className="add-right-1"> </div>
          <div className="add-right-2">
            {" "}
            <input
              type="text"
              placeholder="kurs"
              className="add-user-input-2"
              style={{ background: "white" }}
            />{" "}
          </div>
          <div className="add-right-3">
            {" "}
            <input
              type="text"
              placeholder="kurs"
              className="add-user-input-2"
              style={{ background: "white" }}
            />{" "}
          </div>
          <div className="add-right-1"> Qancha berdi: </div>
          <div className="add-right-2">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
              onChange={HandleMoneygiven}
            />{" "}
          </div>
          <br />
          <div className="add-right-1"> To'lanishi kerak: </div>
          <div className="add-right-2">
            {" "}
            <input
              type="number"
              placeholder="so'm"
              className="add-user-input-2"
              onChange={HandleMoneyToGive}
            />{" "}
          </div>
        </div>
      </div>
      <div className="add-cancel" >
        <button className="add-cancel-btn">Bekor qilish</button>
      </div>
      <div className="add-save" >
        <button className="add-cancel-save">Saqlash</button>
      </div>
    </div>
  );
}
