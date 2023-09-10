import React, { useState } from 'react';

function CompB({ onTextChange }) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText); // Notify the parent component about the text change
  };

  return (
    <div>
      <h2>Sender</h2>
      <input
        type="text"
        placeholder="Receive Values from CompA"
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default CompB;
