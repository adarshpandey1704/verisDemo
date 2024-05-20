import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventSetup from './pages/EventSetup';
import EventList from './pages/EventList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventSetup />} />
      <Route path="/eventlist" element={<EventList />} />
    </Routes>
  );
};

export default App;
