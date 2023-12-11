// ChildComponent.js
import React from 'react';

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: {message}</p>
    </div>
  );
};

export default ChildComponent;
