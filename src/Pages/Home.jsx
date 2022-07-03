import { useState } from "react";
import AdminHome from "./AdminHome";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
        <div className="tolashi-kerak"><strong>To'lash kerak bo'lgan summa:</strong></div>
        <div className="client-info-text client-info-left">Bir narsa uchun:</div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">Bir narsa uchun:</div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">Bir narsa uchun:</div>
        <div className="client-info-text client-info-right">1,000,000 so'm</div>
        <div className="client-info-text client-info-left">Jami qo'shilgan odamlar:</div>
        <div className="client-info-text client-info-right">3</div>
        <div className="client-info-text client-info-left">Qancha odam qo'shish kerak:</div>
        <div className="client-info-text client-info-right">2</div>
        <div className="client-info-text client-info-left">Minimum bonus:</div>
        <div className="client-info-text client-info-right">10%</div>
        <div className="client-info-text client-info-left">Bonusdan keyingi summa:</div>
        <div className="client-info-text client-info-right">2,700,000 so'm</div>
      </div>
    </div>
  );
};
