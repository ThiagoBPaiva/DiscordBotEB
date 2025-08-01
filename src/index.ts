import { Client, GatewayIntentBits, Message, GuildMember, EmbedBuilder, TextChannel } from "discord.js";
import * as dotenv from "dotenv";

import { messageNewMember } from './event/newMember'
import { exitMember } from './event/exitMember'

// Carregando todas sa variaveis do .env
dotenv.config();

// Criar instância do cliente do Discord
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
	],
});

// Quando o bot estiver pronto
client.on("ready", () => {
	console.log(`✅ Bot ligado como ${client.user?.tag}`);
})

messageNewMember(client);
exitMember(client);

client.login(process.env.DISCORD_TOKEN)
