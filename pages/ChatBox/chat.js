import React, { useState } from "react";

export default function ChatBox() {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [user1Messages, setUser1Messages] = useState([]); 
  const [user2Messages, setUser2Messages] = useState([]); 

  const user1SendMessage = (e) => {
    e.preventDefault();
    setUser1Messages([...user1Messages, user1]); 
    setUser1('');
  };

  const user2SendMessage = (e) => {
    e.preventDefault();
    setUser2Messages([...user2Messages, user2]); 
    setUser2('');
  };

  return (
    <div>
      <form className="fm">
        <h2>Aftab's Screen:</h2>
        <input type="text" id="user1" value={user1} onChange={(e) => setUser1(e.target.value)} required />
        <button id="btn-user1" onClick={user1SendMessage}>Send</button><br/>
        <p><strong>Aftab:</strong> {user1}</p>
        <p>
          <strong>Sadia:</strong>
          {user2Messages.map((message, index) => <p key={index}>{message}</p>)}
        </p>
      
        <h2>Sadia's Screen:</h2>
        <input type="text" id="user2" value={user2} onChange={(e) => setUser2(e.target.value)} required />
        <button id="btn-user2" onClick={user2SendMessage}>Send</button>
        <div>
          <p><strong>Sadia:</strong> {user2}</p>
        </div>
        <div>
          <p><strong>Aftab:</strong>
            {user1Messages.map((message, index) => <p key={index}>{message}</p>)}
          </p>
        </div>
      </form>
    </div>
  )
}