import HomeBtn from "../Media/Homehome.svg";
import AddUserBtn from "../Media/Add useraddUser.svg";
import SuperBtn from "../Media/Userssuper.svg";
import SettingsBtn from "../Media/Settings.svg";
import {Link} from "react-router-dom"
import "../Admin.css";
export default function User(props) {
  const selectedPage = props.selectedPage;
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
            <img src={AddUserBtn} className="menu-svg" alt=""/>
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
            <img src={SettingsBtn} className="menu-svg" alt=""/>
          </div>
        </Link>
      </div>
    </div>
  );
}
