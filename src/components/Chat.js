import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css';

function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, room } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [users, setUsers] = useState([]);
  const socket = useRef();
  const messagesEndRef = useRef(null);
  
  // Redirect if no username or room is provided
  useEffect(() => {
    if (!username || !room) {
      navigate('/');
    }
  }, [username, room, navigate]);

  // Connect to the socket server
  useEffect(() => {
    if (!username || !room) return;

    const SOCKET_SERVER = process.env.REACT_APP_SOCKET_SERVER || 'http://localhost:3001';
    console.log(`Connecting to socket server at: ${SOCKET_SERVER}`);
    
    socket.current = io(SOCKET_SERVER, {
      withCredentials: true,
      transports: ['websocket', 'polling']
    });
    
    // Join the room
    socket.current.emit('join_room', { username, room });

    // Listen for incoming messages
    socket.current.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Listen for user list updates
    socket.current.on('room_users', (roomUsers) => {
      setUsers(roomUsers);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [username, room]);

  // Auto-scroll to bottom of message list
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (currentMessage.trim() === '') return;
    
    const messageData = {
      message: currentMessage,
      username: username,
      room: room,
      time: new Date().toLocaleTimeString(),
    };

    await socket.current.emit('send_message', messageData);
    setCurrentMessage('');
  };

  const leaveRoom = () => {
    socket.current.disconnect();
    navigate('/');
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <h3>Room: {room}</h3>
        <h4>Online Users</h4>
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={index} className={user.username === username ? "current-user" : ""}>
              {user.username} {user.username === username ? "(You)" : ""}
            </li>
          ))}
        </ul>
        <button className="leave-button" onClick={leaveRoom}>
          Leave Room
        </button>
      </div>
      
      <div className="chat-main">
        <div className="chat-header">
          <h2>Neo<span className="chat-header-highlight">Chat</span> <span className="chat-room-name">| {room}</span></h2>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.username === username ? "my-message" : 
                           message.username === "System" ? "system-message" : "other-message"}`}
            >
              <div className="message-info">
                <span className="message-username">{message.username}</span>
                <span className="message-time">{message.time}</span>
              </div>
              <div className="message-text">{message.message}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="message-form" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
