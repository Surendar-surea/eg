import React, { useState, useEffect } from 'react';
import { db } from '../firebase/FireBase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import './LinkingFiles.css'

const LinkingForm = () => {
  const [organizers, setOrganizers] = useState([]);
  const [politicalParties, setPoliticalParties] = useState([]);
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [selectedParty, setSelectedParty] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const organizersData = await getDocs(collection(db, 'organizers'));
      const partiesData = await getDocs(collection(db, 'politicalParties'));
      setOrganizers(organizersData.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setPoliticalParties(partiesData.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'links'), { organizerId: selectedOrganizer, partyId: selectedParty, details });
      setSelectedOrganizer('');
      setSelectedParty('');
      setDetails('');
    } catch (error) {
      console.error('Error linking organizer with political party:', error);
    }
  };

  return (
    <div className="main-cont">
      <h2>Link Organizer with Political Party</h2>
      <form onSubmit={handleSubmit}    className="input">
        <select
     
          value={selectedOrganizer}
          onChange={(e) => setSelectedOrganizer(e.target.value)}
          required
        >
          <option value="" disabled>Select Organizer</option>
          {organizers.map(organizer => (
            <option key={organizer.id} value={organizer.id}>{organizer.name}</option>
          ))}
        </select>
        <select
          value={selectedParty}
          onChange={(e) => setSelectedParty(e.target.value)}
          required
        >
          <option value="" disabled>Select Political Party</option>
          {politicalParties.map(party => (
            <option key={party.id} value={party.id}>{party.name}</option>
          ))}
        </select>
        <textarea
          placeholder="enter addition information"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        ></textarea>
        <button type="submit">Link</button>
      </form>
    </div>
  );
};

export default LinkingForm;
