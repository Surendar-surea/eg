import React, { useState } from 'react';
import { db } from '../firebase/FireBase';
import { collection, addDoc } from 'firebase/firestore';

const PoliticalPartyForm = () => {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [ideology, setIdeology] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'politicalParties'), { name, leader, ideology });
      setName('');
      setLeader('');
      setIdeology('');
    } catch (error) {
      console.error('Error adding political party:', error);
    }
  };

  return (
    <div className="main-cont">
      <h2>Add Political Party</h2>
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          placeholder="Party Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Leader Name"
          value={leader}
          onChange={(e) => setLeader(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ideology"
          value={ideology}
          onChange={(e) => setIdeology(e.target.value)}
          required
        />
        <button type="submit">Add Political Party</button>
      </form>
    </div>
  );
};

export default PoliticalPartyForm;
