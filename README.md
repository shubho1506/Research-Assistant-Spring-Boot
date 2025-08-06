# 🧠 Research Assistant Extension

A powerful and extensible Research Assistant browser extension backed by a Spring Boot REST API and integrated with the **Gemini API model** to help researchers, students, and professionals quickly generate insights, summaries, and answers from content.

---

## 🚀 Features

- 🌐 Chrome Extension frontend built with **Vanilla JavaScript**
- 🔗 Backend powered by **Spring Boot REST API**
- 🤖 AI-powered responses via **Gemini API**
- 📄 Summarize and extract insights from selected web content
- 🔒 CORS-enabled secure API calls
- 📦 RESTful endpoints for content processing

---

## 🔧 Tech Stack

| Layer      | Technology                       |
|------------|----------------------------------|
| Backend    | Spring Boot, Java                |
| AI Model   | Gemini API (Google AI)           |
| Frontend   | JavaScript (Chrome Extension)    |
| Tools      | Maven, Git, IntelliJ/VS Code     |

---

## ⚙️ Setup Instructions

### 🔹 Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/research-assistant-extension.git
   cd research-assistant-extension/backend

2. Configure Gemini API Key:
Add this to src/main/resources/application.properties:
gemini.api.key=YOUR_API_KEY
Run the application:
mvn spring-boot:run
The backend will be available at: http://localhost:12345

🔹 Frontend (Chrome Extension)

- Open Chrome and go to: chrome://extensions/
- Enable Developer Mode (top-right toggle)
- Click Load unpacked and select the extension/ folder
- Interact with the extension via the popup or context menu

📡 API Endpoint
POST /api/research/process
- Send content for AI-powered processing

Example Request:
{
  "content": "Selected article or paragraph from the web..."
}

Example Response:
{
  "response": "AI-generated summary or answer..."
}

🛡️ Security

- CORS is enabled to allow safe frontend-backend communication
- Store API keys securely (e.g., use environment variables for production)


📃 License
This project is licensed under the MIT License.

🙌 Acknowledgements

- Spring Boot
- Gemini API
- Chrome Extensions Docs

MDN Web Docs – JavaScript

👤 Author
Shubhodeep Sarkar
📧 [sds15shubho@gmail.com]

