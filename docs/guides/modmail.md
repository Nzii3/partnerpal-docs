---
title: ✉️ Modmail
sidebar_class_name: status new
---
import Link from '@docusaurus/Link';
import classnames from 'classnames';
import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

# Modmail

Introducing **Sentry's innovative public modmail system** – a dynamic feature that facilitates user interaction with server moderators through a seamlessly integrated platform within Sentry's direct messages on Discord. This system is not just a breakthrough in user engagement; it also boasts Discord's newest and most advanced user interface, ensuring a visually pleasing and intuitive experience.

What sets Sentry's Modmail System apart is its commitment to providing a support solution that is both reliable and customizable. Users can expect a dependable support experience with features that can be tailored to meet the unique needs of each server or community. This level of flexibility ensures that server moderators can efficiently manage and address user queries, issues, and feedback.

:::warning
This documentation is currently unfinished
:::

## Commands

Usage   | Description | Aliases | Has slash command?
--- | --- | --- | --- |
`>reply <message>` | Reply to a modmail thread, attachments are supported by attaching a file to your message when using the command. | `r`, `send` | ❌
`>anonreply <message>` | Reply to a modmail thread anonymously, which hides the author of the message for the user. | `ar`, `areply`, `asend` | ❌
`>close ?t 12h ?r Have a great day!` | Close a modmail thread, with an optional time to wait using [flags](/guides/flags.md). | - | ❌
`>snippets [name]` | View all snippets, or provide a `name` to use a snippet | `s` | ❌
`>snippets add <name> <content>` | Create a new snippet with a name and a value, only server managers can do this | - | ❌
`>snippets remove <name> ` | Deletes an existing snippet via name, only server managers can do this | - | ❌

## Snippets
Snippets consist of predefined text templates identified by a name and corresponding value. They streamline the process of avoiding manual copying and pasting of frequently used responses, whether they are lengthy or brief. Just employ `>snippets snippetname` to effortlessly incorporate a snippet, prompting an automatic response in the thread with the pre-established content!

### Example
<DiscordMessages>
	<DiscordMessage author="vNziie--" avatar="https://r.nziie.xyz/logo">
		&gt;snippet thanks
	</DiscordMessage>
  <DiscordMessage author="Sentry" avatar="https://r.nziie.xyz/sentry-logo" bot verified>
    <DiscordEmbed slot="embeds" color="#5865f2" author-name="Reply from Head Dev | Nziie (@nziie.dev)" author-image="https://r.nziie.xyz/logo" footer-text="Anonymous Staff Reply">
      <DiscordEmbedDescription slot="description">
        Thanks for contacting support staff! We hope you had a good experience and that we full-filled your request.<br/><br/>This thread will close in **10 minutes**. Please note that replying to this message will cancel the timed closure. **Please only reply to this message if you need more help**.
      </DiscordEmbedDescription>
    <DiscordEmbedFooter slot="footer">
    Anonymous Staff Reply • Today at 10:00 AM
    </DiscordEmbedFooter>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>

## Thread Example

Here is an example of how a thread would look.

<DiscordMessages>
  <DiscordMessage author="Sentry" avatar="https://r.nziie.xyz/sentry-logo" bot verified>
    <DiscordEmbed slot="embeds" color="#5865f2" author-name="Created by @user50131" author-image="https://cdn.discordapp.com/attachments/1125451118009397401/1125451118177157220/discord_blurple.png?ex=65dcb108&is=65ca3c08&hm=0ceb8f58f619bec8a632a867fe419e353cab7d6fbf475f6eb5a5e12c6ef9c806&" thumbnail="https://cdn.discordapp.com/attachments/1125451118009397401/1125451118177157220/discord_blurple.png?ex=65dcb108&is=65ca3c08&hm=0ceb8f58f619bec8a632a867fe419e353cab7d6fbf475f6eb5a5e12c6ef9c806&" footer-text="Anonymous Staff Reply">
      <DiscordEmbedDescription slot="description">
        <DiscordMention>User</DiscordMention> was created <DiscordTime>a year ago</DiscordTime>, and joined the server <DiscordTime>6 months ago</DiscordTime>.
      </DiscordEmbedDescription>
    <DiscordEmbedFooter slot="footer">
    Thread ID: zg9wECui5N • User ID: 107054734753837880
    </DiscordEmbedFooter>
    </DiscordEmbed>
        <DiscordEmbed slot="embeds" color="#5865f2" author-name="Reply @user50131" author-image="https://cdn.discordapp.com/attachments/1125451118009397401/1125451118177157220/discord_blurple.png?ex=65dcb108&is=65ca3c08&hm=0ceb8f58f619bec8a632a867fe419e353cab7d6fbf475f6eb5a5e12c6ef9c806&" footer-text="Anonymous Staff Reply">
      <DiscordEmbedDescription slot="description">hello</DiscordEmbedDescription>
    <DiscordEmbedFooter slot="footer">
    Today at 10:01 AM
    </DiscordEmbedFooter>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordMessages>