const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Store users and their room information
const users = {};

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    const { username, room } = data;
    
    // Store user information
    users[socket.id] = { username, room };
    
    // Join the room
    socket.join(room);
    
    // Send welcome message to the user who joined
    socket.emit("receive_message", {
      message: `Welcome to the room, ${username}!`,
      username: "System",
      time: new Date().toLocaleTimeString(),
    });
    
    // Send notification to all other users in the room
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the room!`,
      username: "System",
      time: new Date().toLocaleTimeString(),
    });
    
    // Send updated user list to everyone in the room
    const roomUsers = Object.values(users).filter(user => user.room === room);
    io.in(room).emit("room_users", roomUsers);
    
    console.log(`${username} joined room: ${room}`);
  });

  socket.on("send_message", (data) => {
    const { room } = users[socket.id];
    io.in(room).emit("receive_message", data);
    console.log(`Message sent in ${room}: ${data.message}`);
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      const { username, room } = users[socket.id];
      
      // Send notification that user has left
      socket.to(room).emit("receive_message", {
        message: `${username} has left the room.`,
        username: "System",
        time: new Date().toLocaleTimeString(),
      });
      
      // Remove the user from our users object
      delete users[socket.id];
      
      // Send updated user list to everyone in the room
      const roomUsers = Object.values(users).filter(user => user.room === room);
      io.in(room).emit("room_users", roomUsers);
      
      console.log(`User Disconnected: ${username} from ${room}`);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
