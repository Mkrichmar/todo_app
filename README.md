Todo App

This is the frontend for the Todo List App built with Next.js, Tailwind CSS, and TypeScript.

Features

Fully responsive design.

Interacts with the backend API for task management.

Setup Instructions

1. Clone the Repository
    git clone <frontend-repo-url>
    cd frontend

2. Install Dependencies
    npm install

3. Create Environment Variables
Create a .env.local file in the root of the project with the following content:
    NEXT_PUBLIC_API_URL=http://localhost:3001

4. Start the Development Server
    npm run dev
The app will run at http://localhost:3000.

Folder Structure

frontend/

├── app/

│   ├── components/      # Reusable components

│   ├── page.tsx         # Main page

│   ├── create/          # Create Task Page

│   ├── edit/[id]/       # Edit Task Page

├── public/              # Public assets

├── styles/              # Global styles

Connecting to the Backend

Ensure the backend server is running (http://localhost:3001 by default).

The frontend fetches data from the backend via the NEXT_PUBLIC_API_URL environment variable.

Test endpoints in the app:
    Create a task
    Edit a task
    Mark tasks as completed
    
Notes
    Make sure both the frontend and backend servers are running simultaneously.
    If the backend URL changes, update NEXT_PUBLIC_API_URL in .env.local.
