import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setUser(data[0]))
  }, []);

  return (
    <>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style={{width: '100%'}} />
        <div className="container">
          <h4>Name: <b>{user ? user.name : null}</b></h4> 
          <p>Age: {user ? user.age : null}</p>
          <p>Gender: {user ? user.gender : null}</p> 
        </div>
      </div>
    </>
  );
}

export default App;
