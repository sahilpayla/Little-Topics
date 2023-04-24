import React, { useState } from 'react';
import ChildComponents from './ChildComponents';


function App() {
  const [message, setMessage] = useState('');
  
  // Function to update the state of the parent component
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  }

  return (
    <div>
      <h2>{message}</h2>
      {/* Pass the updateMessage function as a prop to the child component */}
      <ChildComponents updateMessage={updateMessage} />
    </div>
  );
}

export default App;
