import React, { useState } from 'react';
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import Sidebar from './components/sidebar';
function App() {
  const [receivedText, setReceivedText] = useState('');

  const handleTextChange = (newText) => {
    setReceivedText(newText);
  };

  return (
    <div className="App">
      <Sidebar/>
      <CompB onTextChange={handleTextChange} />
      < CompA receivedText={receivedText} />
    </div>
  );
}

export default App;
