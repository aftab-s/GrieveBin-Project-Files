import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Login, Register } from "./Core";
import { UserDashboard } from "./User";
import GrievanceForm from "./User/GrievanceForm";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/new-grievance" element={<GrievanceForm />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
