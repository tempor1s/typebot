require('dotenv').config()
import BotClient from './client/bot-client'
import { token } from './config'

const client = new BotClient({ token })

client.start()
