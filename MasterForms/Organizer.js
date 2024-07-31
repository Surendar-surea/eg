import React, { useState } from 'react';
import { db } from '../firebase/FireBase';
import Datamanagement from '../datamanagement/Datamanagement'
import { collection, addDoc } from 'firebase/firestore';

const OrganizerForm = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'organizers'), { name, contactInfo });
      setName('');
      setContactInfo('');
    } catch (error) {
      console.error('Error adding organizer:', error);
    }
  };
  


  return (
    <div className="main-cont">
      <h2>Add Organizer</h2>
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          placeholder="Organizer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Information"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
        <button  type="submit">Add Organizer</button>
      </form>
    </div>
  );
};

export default OrganizerForm;
