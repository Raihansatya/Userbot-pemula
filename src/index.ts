🟢 Online: ${this.isRunning}\n +
                   👤 User: ${this.client.session.getUserId()}\n +
                   ⏰ Uptime: ${process.uptime().toFixed(0)}s\n +
                   📊 Memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB;
    
    await message.reply({ message: status, parseMode: 'html' });
  }

  // Command: /restart (admin only)
  private async handleRestart(message: any, args: string[], sender: any) {
    if (sender.id !== ADMIN_USER_ID) {
      await message.reply('⚠️ This command is for admins only');
      return;
    }

    await message.reply('🔄 Restarting bot...');
    process.exit(0);
  }

  // Handle private messages
  private async handlePrivateMessage(message: any, text: string, sender: any) {
    // Custom logic for handling admin private messages
    if (text && !text.startsWith('/')) {
      const response = 👤 You said: "${text}"\n\nI received your message!;
      await message.reply(response);
    }
  }

  // Generate AI response
  private async generateAIResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post('https://oi-server.onrender.com/chat/completions', {
        model: 'openrouter/claude-sonnet-4',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful Telegram AI assistant. Keep responses concise and friendly.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      }, {
        headers: {
          'customerId': '',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer xxx'
        }
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI API error:', error);
      return '⚠️ Sorry, I encountered an error processing your request.';
    }
  }

  // Send message to admin
  private async sendToAdmin(message: string) {
    try {
      await this.client.sendMessage(ADMIN_USER_ID, { message });
    } catch (error) {
      console.error('Error sending to admin:', error);
    }
  }

  // Stop the bot
  async stop() {
    this.isRunning = false;
    await this.client.disconnect();
    console.log('🛑 Bot stopped.');
  }
}

// Main execution
async function main() {
  if (!API_ID || !API_HASH) {
    console.error('❌ Please set API_ID and API_HASH environment variables');
    process.exit(1);
  }

  const bot = new TelegramUserBot();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down bot...');
    await bot.stop();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received termination signal...');
    await bot.stop();
    process.exit(0);
  });

  await bot.start();
}

// Run the bot
main().catch(console.error);
>>>>>>> REPLACE
