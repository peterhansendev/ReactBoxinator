import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import User from "./pages/user/user";
import UpdateUserInfo from "./pages/updateUserInfo/updateUserInfo";
import NewUser from "./pages/newUser/newUser";
import Guest from "./pages/guest/guest";
import Admin from "./pages/admin/admin";
import Nav from "./components/nav/nav";
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="updateuserinfo" element={<UpdateUserInfo />} />
          <Route path="newuser" element={<NewUser />} />
          <Route path="guest" element={<Guest />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
