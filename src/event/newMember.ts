import { Client, GatewayIntentBits, Message, GuildMember, EmbedBuilder, TextChannel } from "discord.js";

export function messageNewMember(client: Client) {
    client.on("guildMemberAdd", (member: GuildMember) => {
        console.log(`Um novo membro entrou no servidor, sejá bem vindo ${member.user.tag}`);
        const canalDeBoasVindas = member.guild.channels.cache.get("1400164035713957999") // Mandando a menssagem para o canal certo de acordo com o ID

        // Enviando um Embed para cada pessoa que entrar no servidor
        if (!canalDeBoasVindas?.isTextBased()) return;

        if (canalDeBoasVindas?.isTextBased()) {
            canalDeBoasVindas.send(`${member}`)
        }

        const embedDeBoasVindas = new EmbedBuilder()
        .setColor(0x2ecc71)
        .setTitle("#🟢 Bem-vindo(a)!")
        .setDescription(`Olá ${member.user.tag}, seja bem-vindo(a) ao servidor do ***Exército Brasilerio da ECO***! Aqui, só os fortes prevalecem`)
        .addFields(
            {
                name: "📌 Tag do Usúario",
                value: `\`${member.user.tag}\`\n\`${member.id}\``,
                inline: false
            },
            {
                name: "🪖 Alistamento de Civis",
                value: 
                    "Deseja ser recrutado? Basta entrar no jogo, ir até a fila do quartel e esperar um **Cabo** te chamar!",
                inline: false
            },
            {
                name: "📩 Suporte",
                value:
                    "Precisa de ajuda? Vá até o canal <#ID_CANAL_SUPORTE> e selecione a categoria desejada!",
                inline: false,
            }
        )
        .setFooter({ text: "Exército Brasileiro ECO", iconURL: member.user.displayAvatarURL() });
        canalDeBoasVindas.send({ embeds: [embedDeBoasVindas] });
    })
}