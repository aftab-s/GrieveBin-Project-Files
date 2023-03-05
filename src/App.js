import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Login, Register } from "./Core";
import { SingleGrievance, UserDashboard } from "./User";
import GrievanceForm from "./User/GrievanceForm";
import Grievances from "./User/Grievances";

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
            <Route path="/user/grievances" element={<Grievances />} />
            <Route path="/user/grievance/1234" element={<SingleGrievance />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
