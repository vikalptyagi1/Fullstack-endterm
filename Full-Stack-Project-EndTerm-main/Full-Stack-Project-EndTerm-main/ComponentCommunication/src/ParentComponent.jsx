// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  const updateMessage = () => {
    setMessage('Updated message from Parent!');
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message in Parent: {message}</p>
      <button onClick={updateMessage}>Update Message</button>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
