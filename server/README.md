# NeoChat Server

This is the backend server for the NeoChat application. It handles real-time chat functionality using Socket.io.

## Deployment Options

This server needs to be deployed separately from the frontend, as it requires a platform that supports WebSockets and long-running processes. Here are some options:

### Option 1: Deploy on Render.com

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variable: `PORT=10000` (or any port you prefer)

### Option 2: Deploy on Railway

1. Create a new project on Railway
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`

### Option 3: Deploy on Heroku

1. Create a new app on Heroku
2. Connect your GitHub repository or use Heroku CLI to deploy
3. The included Procfile will tell Heroku how to run the server

## Environment Variables

- `PORT`: The port on which the server will run (default: 3001)

## Local Development

1. Install dependencies: `npm install`
2. Run the server in development mode: `npm run dev`
