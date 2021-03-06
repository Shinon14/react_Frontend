import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// components:
import Navbar from "./components/navbar/Navbar";
import CompanyList from "./components/company/companyList";
import CompanyForm from "./components/company/CompanyForm";
import ProductoForm from './components/producto/ProductoForm';
import EnrutadorList from "./components/MenuApp/Enrutador";
import LoginItem from './components/LoginRegister/LogItem';
import loginForm from './components/LoginRegister/LogForm';
import login from './components/LoginRegister/Login'


//
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ProductList from "./components/producto/ProductoLista";

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navbar />
    <div className="container my-4">
      <Route path="/" exact component={EnrutadorList} />
      <Route exact path="/companyList" component={CompanyList} />
      <Route path="/productoList" component={ProductList} />
      <Route path="/companyForm" component={CompanyForm} />
      <Route path="/productoForm" component={ProductoForm}/>
      <Route path="/updateCompany/:id" component={CompanyForm} />
      <Route path="/updateProducto/:id" component={ProductoForm} />
      <Route path="/login" component={login} />
      <Route path="/logForm" component={loginForm}></Route>

    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
