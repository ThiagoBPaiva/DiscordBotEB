import { Client, GuildMember } from "discord.js";

export function exitMember(client: Client) {
    client.on("guildMemberRemove", (member: GuildMember | import("discord.js").PartialGuildMember) => {
        const canalDeBoasVindas = member.guild.channels.cache.get("1400164718567751763") // Mandando a menssagem para o canal certo de acordo com o ID

        // Enviar uma menssagem

        if (canalDeBoasVindas?.isTextBased()) {
            canalDeBoasVindas.send(
                `> 👋 Até mais, ${member.user.tag}!`
            )
        }
    })
}