# AI Code Reviewer

A full-stack application that uses Google's Gemini AI to provide intelligent code reviews. Simply paste your code and get instant feedback, suggestions, and improvements.

## Features

- **Real-time Code Editing**: Interactive code editor with syntax highlighting
- **AI-Powered Reviews**: Leverages Google Gemini AI for comprehensive code analysis
- **Markdown Output**: Reviews are formatted in markdown with syntax highlighting
- **Clean UI**: Split-screen interface for code input and review output

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Prism.js** - Syntax highlighting for code editor
- **React Simple Code Editor** - Lightweight code editor component
- **React Markdown** - Markdown rendering with syntax highlighting
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** with **Express** - RESTful API server
- **Google Generative AI** - Gemini AI integration
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-code-reviewer
   ```

2. **Install backend dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `Backend` directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env` file

## Running the Application

1. **Start the backend server**
   ```bash
   cd Backend
   node server.js
   ```
   Server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Paste or type your code in the left editor panel
3. Click the "Review" button
4. View the AI-generated code review in the right panel

## API Endpoints

### POST `/ai/get-review`
Reviews the provided code using Gemini AI.

**Request Body:**
```json
{
  "code": "function example() { return 'Hello World'; }"
}
```

**Response:**
```
Markdown-formatted code review with suggestions and improvements
```

## Project Structure

```
ai-code-reviewer/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
└── README.md
```

## Development Scripts

### Backend
```bash
node server.js    # Start the server
```

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Troubleshooting

### Common Issues

1. **API Key not working**: Make sure your `.env` file is in the `Backend` directory and the key is valid
2. **CORS errors**: Ensure the backend server is running on port 3000
3. **Module not found**: Run `npm install` in both Backend and Frontend directories

### Environment Variables

If you're having issues with environment variables, make sure:
- The `.env` file is in the `Backend` directory
- There are no spaces around the `=` in your `.env` file
- The API key is valid and has the necessary permissions