import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Dashboard.css"

import Organizer from '../MasterForms/Organizer';
import PoliticalParty from '../MasterForms/PoliticalParty';
import LinkingForm from '../linkingfiles/LinkingForm';
import DataManagement from '../datamanagement/Datamanagement';

const Dashboard = () => {
  return (
    <div>
    
      <nav>
      <h1>Dashboard</h1>
        <ul>
          <li><Link to="dashboard/organizer">Add Organizer</Link></li>
          <li><Link to="dashboard/politicalparty">Add Political Party</Link></li>
          <li><Link to="dashboard/linkingform">Link Organizer with Party</Link></li>
          <li><Link to="dashboard/datamanagement">Manage Data</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Dashboard;


