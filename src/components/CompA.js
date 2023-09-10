import React from 'react';

function CompA({ receivedText }) {
  return (
    <div>
      <h2>Receiver</h2>
      <p>Received Text: {receivedText}</p>
    </div>
  );
}

export default CompA;
