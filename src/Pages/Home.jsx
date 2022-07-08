import { useState } from "react";
import AdminHome from "./AdminHome";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import ReactFlow from 'react-flow-renderer';

const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: <div className="flow-chart-diag" > 1-gen </div>},
      position: { x: 0, y: 25 },
    },
  
    {
      id: '21',
      // you can also pass a React component as a label
      data: { label: <div className="flow-chart-diag" > 2-gen </div>},
      position: { x: 0, y: 100 },
    },
    {
      id: '31',
      data: { label: <div className="flow-chart-diag" > 3-gen </div> },
      position: { x: -187.5, y: 175 },
    },
    {
      id: '32',
      data: { label: <div className="flow-chart-diag" > 3-gen </div> },
      position: { x: 187.5, y: 175 },
    },
    {
      id: '41',
      data: { label: <div className="flow-chart-diag" > 4-gen </div> },
      position: { x: -275, y: 250 },
    },
    {
      id: '42',
      data: { label: <div className="flow-chart-diag" > 4-gen </div> },
      position: { x: -100, y: 250 },
    },
    {
      id: '43',
      data: { label: <div className="flow-chart-diag" > 4-gen </div> },
      position: { x: 100, y: 250 },
    },
    {
      id: '44',
      data: { label: <div className="flow-chart-diag" > 4-gen </div> },
      position: { x: 275, y: 250 },
    },
  ];
  
  const initialEdges = [
    { id: 'e1-21', source: '1', target: '21' },
    { id: 'e21-31', source: '21', target: '31' },
    { id: 'e21-32', source: '21', target: '32' },
    { id: 'e31-41', source: '31', target: '41' },
    { id: 'e31-42', source: '31', target: '42' },
    { id: 'e32-43', source: '32', target: '43' },
    { id: 'e32-44', source: '32', target: '44' },

  ];
  
  function Flow() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
  
    return <ReactFlow nodes={nodes} edges={edges} fitView style={{
        width:"55vw",
        backgroundColor:"white",
        height:"calc(100vh - 100px)",
        position:"fixed",
        top:"50px",
        left:"40vw",
        border:"2px solid black",
        borderRadius:"10px"
    }} />;
  }
  

export default function Home(props) {
  const [isAdmin, setIsAdmin] = useState(true);
  if (isAdmin) {
    return <AdminHome selectedPage={props.selectedPage} SelectPage={props.SelectPage} />;
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

<Flow />
     
      <div className="client-log-out">
        Tizimdan chiqish{" "}
        <IoExitOutline
          style={{ fontSize: "29px", position: "fixed", top: "6.5px" }}
        />{" "}
      </div>
    </div>
  );
};
