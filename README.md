# NeoChat - CodeClause Chat Application

A real-time chat application built with React and Socket.io, featuring a modern neon glass UI theme. This application allows users to join different rooms and communicate in real-time.

![NeoChat Screenshot](https://placeholder-for-screenshot.com)

## Features

- Join different chat rooms
- Real-time messaging with Socket.io
- User online status tracking
- System notifications for user join/leave events
- Modern neon glass UI theme
- Responsive design for desktop and mobile
- Separate frontend and backend deployment

## Technologies Used

- **Frontend**: React, React Router, Socket.io Client, CSS
- **Backend**: Node.js, Express, Socket.io
- **Deployment**: Vercel (frontend), Render/Railway/Heroku (backend)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

## How to Run

### Running the Server

1. Navigate to the server directory:

   ```
   cd server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```
   The server will run on port 3001.

### Running the Client

1. Open a new terminal window/tab
2. Navigate to the project root directory:

   ```
   cd codeclause-chat-application
   ```

3. Start the client:

   ```
   npm start
   ```

   The client will run on port 3000.

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter your username
2. Select a room to join (General, Technology, Random, Games)
3. Start chatting!

## Deployment Guide

This application consists of two parts that need to be deployed separately:
1. The React frontend (this repository)
2. The Socket.io server (in the `server` directory)

### Frontend Deployment (Vercel)

1. Fork or clone this repository
2. Create an account on [Vercel](https://vercel.com) if you don't have one
3. Create a new project and import your GitHub repository
4. Set the following environment variables:
   - `REACT_APP_SOCKET_SERVER=https://your-backend-url.com` (URL to your deployed backend)
5. Deploy the application

### Backend Deployment Options

The backend server must be deployed on a platform that supports WebSockets and long-running processes. Vercel isn't suitable for this purpose. Here are some recommended options:

#### Option 1: Render.com

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the build command: `cd server && npm install`
4. Set the start command: `cd server && npm start`
5. Add environment variable: `PORT=10000` (or any port)

#### Option 2: Railway

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set the root directory to `/server`
4. Deploy the application

#### Option 3: Heroku

1. Create a new app on [Heroku](https://heroku.com)
2. Connect your GitHub repository or use Heroku CLI to deploy
3. Set the root directory to `/server` or deploy the server directory separately

### Connecting Frontend to Backend

After deploying both parts:

1. Get the URL of your deployed backend (e.g., `https://neochat-backend.onrender.com`)
2. Add this URL as an environment variable in your Vercel project:
   - `REACT_APP_SOCKET_SERVER=https://your-backend-url.com`
3. In your backend's CORS settings, add the URL of your frontend deployment

## Learning Outcomes

- Real-time communication using WebSockets (Socket.io)
- Deployment of full-stack applications with separate frontend and backend
- Environment configuration for different deployment environments
- Event-driven programming
- State management in React
- User interface design for messaging applications

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

## Project Structure

```
codeclause-chat-application/
├── public/                 # Public assets
├── server/                 # Backend Socket.io server
│   ├── index.js            # Server entry point
│   ├── package.json        # Server dependencies
│   └── Procfile            # For Heroku deployment
├── src/
│   ├── components/
│   │   ├── Chat.js         # Chat room component
│   │   ├── Chat.css        # Chat styles
│   │   ├── Home.js         # Home/login component
│   │   └── Home.css        # Home styles
│   ├── App.js              # Main React component
│   └── index.js            # React entry point
├── .env.development        # Development environment variables
├── .env.production         # Production environment variables
├── vercel.json             # Vercel deployment configuration
└── package.json            # Frontend dependencies
```

## Credits

- Created by [Your Name]
- CodeClause Task - Real-time Chat Application
- Design inspiration: Modern Neon Glass UI
