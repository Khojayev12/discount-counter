import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import User from "./Pages/User";
import { useState } from "react";
import SuperUsers from "./Pages/SuperUsers";
import Settings from "./Pages/Settings";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const SelectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home selectedPage={selectedPage} SelectPage={SelectPage} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <User selectedPage={selectedPage} SelectPage={SelectPage} />
            }
          />
          <Route
            path="/superuser"
            element={
              <SuperUsers selectedPage={selectedPage} SelectPage={SelectPage} />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings selectedPage={selectedPage} SelectPage={SelectPage} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
