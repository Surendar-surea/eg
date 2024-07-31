import React, { useState, useEffect } from 'react';
import { db } from '../firebase/FireBase';
import Organizer from "../MasterForms/Organizer"
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const DataManagement = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const linksData = await getDocs(collection(db, 'links'));
      setLinks(linksData.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'links', id));
      setLinks(links.filter(link => link.id !== id));
    } catch (error) {
      console.error('Error deleting link:', error);
    }
  };

  return (
    <div>
      <h2>Data Management</h2>
 
      
      <ul>
        {links.map(link => (
          <li key={link.id}>
            {link.organizerId} - {link.partyId}: {link.details}
            <button onClick={() => handleDelete(link.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataManagement;
