# AI-Voice-Agent-for-Education
A real-time interactive learning platform that acts as a personal AI tutor, enabling students to practice skills through natural voice conversations. Built with Next.js, AssemblyAI, and Convex, it delivers instant audio feedback and live transcription for a seamless educational experience.

AI Voice Agent for Education is an interactive learning platform designed to help students practice and learn through real-time voice conversations. Built with Next.js, AssemblyAI, and Convex, this agent acts as a personal tutor that can listen, understand, and respond instantly to educational queries.

Whether it's for language learning, mock interviews, or personalized coaching, this project demonstrates the power of Voice AI in modern education.

✨ Key Features

🗣️ Interactive Voice Learning: Students can speak naturally to the AI and receive instant audio feedback.

⚡ Real-Time Performance: Powered by Convex for ultra-low latency data syncing, ensuring the conversation feels natural.

📝 Live Speech-to-Text: Uses AssemblyAI to accurately transcribe student speech in real-time.

🎓 Educational Context: Designed to act as a patient, always-available coach for students.

🔐 Secure Student Login: Integrated authentication (Clerk) for secure access and progress tracking.

🎨 Student-Friendly UI: A clean, responsive interface built with Tailwind CSS, accessible on any device.

🛠️ Tech Stack

Component

Technology

Description

Frontend

Next.js 14

The React framework for building the educational interface.

Styling

Tailwind CSS

Utility-first CSS for a modern, accessible design.

Backend

Convex

Real-time database and backend functions.

Voice AI

AssemblyAI

Advanced Speech-to-Text (STT) and audio intelligence.

Auth

Clerk

Secure user authentication and management.

🚀 Getting Started

Follow these steps to set up the AI Voice Agent for Education on your local machine.

Prerequisites

Node.js (v18 or higher)

NPM (Node Package Manager)

A Convex Account

An AssemblyAI Account

A Clerk Account

1. Clone the Repository

git clone [https://github.com/YOUR_USERNAME/ai-voice-agent-for-education.git](https://github.com/YOUR_USERNAME/ai-voice-agent-for-education.git)
cd ai-voice-agent-for-education


2. Install Dependencies

npm install


3. Set Up Environment Variables

Create a .env.local file in the root directory. Copy the keys below and fill in your details:

# --- CONVEX (Backend) ---
# Automatically generated when you run 'npx convex dev'
NEXT_PUBLIC_CONVEX_URL=[https://your-project.convex.cloud](https://your-project.convex.cloud)

# --- ASSEMBLYAI (Voice) ---
ASSEMBLYAI_API_KEY=your_assemblyai_key

# --- CLERK (Authentication) ---
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key


4. Run the Backend

Initialize the database and start the sync process:

npx convex dev


5. Run the Educational Platform

Open a new terminal window and start the frontend:

npm run dev


Visit http://localhost:3000 to start the AI tutor.

🌐 Deployment Guide

1. Deploying the Frontend (Vercel)

We recommend Vercel for hosting Next.js apps.

Push your code to GitHub.

Go to Vercel and import your repository.

Important: In Vercel's "Environment Variables" section, add the keys from your .env.local file (AssemblyAI Key, Clerk Keys, Convex URL).

Click Deploy.

2. Deploying the Backend (Convex)

To make your database live for production:

npx convex deploy


📂 Project Structure

├── app/
│   ├── (auth)/         # Login/Signup pages
│   ├── api/            # API routes for voice processing
│   └── page.js         # Main classroom interface
├── components/         # UI components (Voice Visualizer, Chat Bubble)
├── convex/
│   ├── schema.ts       # Database structure for chats/users
│   └── tasks.ts        # Backend logic
├── lib/                # Helper functions
├── public/             # Icons and images
└── .env.local          # Local secrets (Excluded from Git)


🤝 Contributing

We welcome contributions to improve education through AI!

Fork the Project

Create your Feature Branch (git checkout -b feature/NewLessonFeature)

Commit your Changes (git commit -m 'Add NewLessonFeature')

Push to the Branch (git push origin feature/NewLessonFeature)

Open a Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
   Aditya Paliwal
   Priyanshu Jain
   Nishant Khandelwal
