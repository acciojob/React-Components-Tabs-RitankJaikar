
import React, { useState } from 'react';
import './../styles/App.css';
import Tabs from './Tabs';
const tabs = [
  { title: 'Tab 1', content: 'Tab 1.' },
  { title: 'Tab 2', content: 'Tab 2.' },
  { title: 'Tab 3', content: 'Tab 3.' },
];
// Usage example
const App = () => {


  return (
    <div>
   
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;