import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Update_User from "./components/Update/Update_User";
import Update_Student from "./components/Update/Update_Student";
import Update_Class from "./components/Update/Update_Class";
import Update_Course from "./components/Update/Update_Course";
import Update_Semester from "./components/Update/Update_Semester";
import Update_Lecturer from "./components/Update/Update_Lecturer";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

<Router>
       <App/>
</Router>


  </React.StrictMode>
);

