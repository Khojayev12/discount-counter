import { useState } from "react";
import AdminHome from "./AdminHome";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Canvas } from "reaflow";
import {IoExitOutline} from "react-icons/io5"

export default function Home(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  if (isAdmin) {
    return <AdminHome />;
  } else {
    return <ClientHome />;
  }
}

const ClientHome = (props) => {
  const [showSeriya, setShowSeriya] = useState(false);

  const handleVisibility = () => {
    setShowSeriya(!showSeriya);
  };

  const nodes = [
    {
      id: "1",
      text: "1 gen",
    },
    {
      id: "2",
      text: "2 gen",
    },
    {
      id: "3",
      text: "3 gen",
    },
    {
      id: "4",
      text: "4 gen",
    },
    {
      id: "5",
      text: "5 gen",
    },
    {
      id: "6",
      text: "6 gen",
    },
    {
      id: "7",
      text: "7 gen",
    },
    {
      id: "8",
      text: "8 gen",
    },
  ];

  const edges = [
    {
      id: "1-2",
      from: "1",
      to: "2",
    },
    {
      id: "2-3",
      from: "2",
      to: "3",
    },
    {
      id: "2-4",
      from: "2",
      to: "4",
    },
    {
      id: "3-5",
      from: "3",
      to: "5",
    },
    {
      id: "3-6",
      from: "3",
      to: "6",
    },
    {
      id: "4-7",
      from: "4",
      to: "7",
    },
    {
      id: "4-8",
      from: "4",
      to: "8",
    },
  ];

  return (
    <div className="client-home">
      <div className="client-info-card">
        <h1>Ism Familiya</h1>
        <div className="client-info-text client-info-left">Telefon raqami:</div>
        <div className="client-info-text client-info-right">+998999681557</div>
        <div className="client-info-text client-info-left">
          Yashash manzili:
        </div>
        <div className="client-info-text client-info-right">
          Xiva shahar, Mushtarak ko'xhasi 32-uy
        </div>
        <div className="client-info-text client-info-left">Pasport seriya</div>
        <div className="client-info-text client-info-right"> ID </div>
        <div className="client-info-text client-info-left">
          <div className="pasport-info">
            <div className="pasport-seriya">
              {showSeriya ? "AA1234567" : "*********"}
            </div>
            <div className="pasport-seriya-hide" onClick={handleVisibility}>
              {showSeriya ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
        </div>
        <div className="client-info-text client-info-right">
          <div className="pasport-info-right">12345</div>
        </div>
        <div className="tolashi-kerak">
          <strong>To'lash kerak bo'lgan summa:</strong>
        </div>
        <div className="client-info-text client-info-left">
          Bir narsa uchun:
        </div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">
          Bir narsa uchun:
        </div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">
          Bir narsa uchun:
        </div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">
          Jami qo'shilgan odamlar:
        </div>
        <div className="client-info-text client-info-right">3</div>
        <div className="client-info-text client-info-left">
          Qancha odam qo'shish kerak:
        </div>
        <div className="client-info-text client-info-right">2</div>
        <div className="client-info-text client-info-left">Minimum bonus:</div>
        <div className="client-info-text client-info-right">10%</div>
        <div className="client-info-text client-info-left">
          Bonusdan keyingi summa:
        </div>
        <div className="client-info-text client-info-right">2,700,000 so'm</div>
      </div>

      <Canvas className="diag" nodes={nodes} edges={edges} width="50%" height="70vh" maxHeight={1000} maxWidth={1000} />
      <div className="client-log-out" >Tizimdan chiqish <IoExitOutline style={{fontSize:"29px", position:"fixed", top:"6.5px"}} /> </div>
    </div>
  );
};
