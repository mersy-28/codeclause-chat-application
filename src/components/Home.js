import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (username.trim() && room.trim()) {
      navigate('/chat', { state: { username, room } });
    } else {
      alert('Please enter a username and select a room');
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="logo">
          <h1>Neo<span>Chat</span></h1>
          <p className="tagline">Code Clause Chat App</p>
        </div>
        <form onSubmit={handleJoinRoom} className="join-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="room">Room</label>
            <select
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            >
              <option value="">Select a Room</option>
              <option value="general">General</option>
              <option value="technology">Technology</option>
              <option value="random">Random</option>
              <option value="games">Games</option>
            </select>
          </div>
          <button type="submit" className="join-button">
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
