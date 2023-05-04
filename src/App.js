import './App.css';
import React from 'react';
import ProfilePhoto from './component/Profile/ProfilePhoto'
import FullName from './component/Profile/FullName'
import Address from './component/Profile/Adresse'

function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <FullName/>
    <Address/>
    </div>
  );
}

export default App;
