<<<<<<< SEARCH
=======
# Telegram User Bot 🤖

A powerful Telegram user bot built with TypeScript that can be deployed as a user account to perform various automated tasks and commands.

## Features

- 🤖 AI Integration: Chat with AI models (Claude, GPT-4, etc.)
- 📢 Broadcast Messages: Send messages to all your contacts
- ⏰ Scheduled Tasks: Automatic daily check-ins and reminders
- 🔒 Admin Commands: Secure admin-only functionality
- 🎯 Custom Commands: Easily extensible command system
- 📊 Status Monitoring: Bot health and performance tracking

## Setup Instructions

### 1. Get Telegram API Credentials

1. Go to https://my.telegram.org
2. Log in with your phone number
3. Go to "API Development Tools"
4. Create a new application and note down:
   - API_ID
   - API_HASH

### 2. Clone and Install


git clone <your-repository-url>
cd telegram-user-bot
npm install


### 3. Configure Environment

Copy the example environment file:


cp .env.example .env


Edit .env with your credentials:


API_ID=your_api_id_here
API_HASH=your_api_hash_here
ADMIN_USER_ID=your_telegram_user_id


### 4. Build and Run


# Development mode
npm run dev

# Production build
npm run build
npm start


### 5. First-time Setup

On first run, you'll be prompted to:
1. Enter your phone number
2. Enter the verification code sent to Telegram
3. The session string will be displayed - save it in your .env file

## Available Commands

### User Commands
- /start - Start the bot
- /help - Show help menu
- /ping - Check bot status
- /ai [prompt] - Chat with AI
- /echo [text] - Echo your message
- /status - Show bot status

### Admin Commands
- /broadcast [message] - Broadcast to all contacts
- /restart - Restart the bot

## Deployment

### Local Deployment

npm run build
npm start


### PM2 (Production)

npm install -g pm2
pm2 start dist/index.js --name telegram-bot
pm2 startup
pm2 save


### Docker Deployment
file
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]


## Security Notes

- 🔒 Never share your SESSION_STRING
- 🔑 Keep your API credentials secure
- 👤 Only trusted users should have admin access
- 📝 Regularly update dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to modify and distribute.
>>>>>>> REPLACE
