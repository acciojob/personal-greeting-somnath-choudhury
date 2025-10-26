
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('')
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input
        type="text"
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
         />
         
         {name && (
          <h2>Hello {name}</h2>
         )}
    </div>
  )
}

export default App
