// src/App.js
import React, { useState, useEffect } from 'react';
import { auth } from './firebase/FireBase';
import Login from './login/Login';
import DashBoard from  "./dashboard/DashBoard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? <DashBoard user={user} /> : <Login setUser={setUser} />}
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;

