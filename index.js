import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login/Login';
import DashBoard from './dashboard/DashBoard';
import Organizer from './MasterForms/Organizer';
import PoliticalParty from './MasterForms/PoliticalParty';
import LinkingForm from './linkingfiles/LinkingForm';
import DataManagement from './datamanagement/Datamanagement';
import { auth } from './firebase/FireBase';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
    children: [
      {
        path: "dashboard/organizer",
        element: <Organizer />,
      },
      {
        path: "dashboard/politicalparty",
        element: <PoliticalParty />,
      },
      {
        path: "dashboard/linkingform",
        element: <LinkingForm />,
      },
      {
        path: "dashboard/datamanagement",
        element: <DataManagement />,
      },
    ],

    
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);