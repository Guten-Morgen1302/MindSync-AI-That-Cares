# NeuroPulse: AI-Powered Cyberpunk Wellness Companion

## Introduction
NeuroPulse is an AI-driven mental wellness platform that provides real-time emotional support, mindfulness exercises, and mood tracking in a futuristic cyberpunk-inspired environment. Using advanced **sentiment analysis, interactive journaling, and AI-powered guided meditation**, NeuroPulse creates a **personalized mental health experience** for every user.

## Features
- **AI Chatbot** – An intelligent assistant that detects user emotions and provides support
- **Sentiment Analysis** – AI-powered insights based on user interactions
- **Mood Tracking & Journaling** – Log emotions and visualize trends with interactive charts
- **Guided Meditation** – AI-generated mindfulness exercises with working audio and video
- **Dynamic UI** – Cyberpunk theme with real-time UI adjustments based on mood
- **Secure & Scalable** – JWT authentication, cloud storage, and real-time data sync

## Tech Stack
### Frontend:
- React (TSX)
- Tailwind CSS
- Framer Motion (for animations)
- Recharts (for data visualization)

### Backend:
- FastAPI (async Python framework)
- Uvicorn (ASGI server)
- PostgreSQL / Firebase (for data storage)

### AI & NLP:
- OpenAI API / Hugging Face (for chatbot responses)
- Whisper API (for voice-to-text input)

### Deployment & Security:
- Vercel (Frontend hosting)
- Replit / Docker (Backend hosting)
- JWT Authentication (User login & data security)

## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/guten-morgen1302/MindSync-AI-That-Cares.git
cd neuro-pulse
```

### 2. Install Dependencies
#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Environment Variables
Create a `.env` file in the backend and frontend folders, adding API keys for OpenAI, database credentials, and other necessary configurations.

## Usage
1. Open the frontend in your browser (`localhost:3000`).
2. Start a conversation with the AI chatbot for emotional support.
3. Log your mood in the journaling system and track emotional trends.
4. Explore guided meditation sessions with interactive visuals.
5. Switch between **dark mode (cyberpunk UI)** and **light mode (minimal UI)**.

## Contributing
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to enhance NeuroPulse.

## License
This project is licensed under the MIT License.

