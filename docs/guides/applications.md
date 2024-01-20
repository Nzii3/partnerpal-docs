---
title: 📋 Applications
sidebar_class_name: status new
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji} from "@skyra/discord-components-react";

# Applications
Sentry's application introduces unique and unprecedented functionalities for designing, overseeing, and gauging user interactions within application systems. It offers **various question formats**, including **multiple-choice options**, **yes/no responses**, **long text**, **short text**, and more. Sentry empowers you with complete authority over application creation, allowing for extensive customization as per your needs.

## Commands
:::tip
If you're on mobile, you can scroll horizontally to view the entire table.
:::
Usage   | Description | Aliases | Has slash command?
--- | --- | --- | --- |
`>applications create <name>` | Create an application for the server, shows the application editor. | `apps create` | ❌
`>applications edit [name]` | Edit an existing application in the server, shows the application editor. If a name isn't provided, a menu will popup with names of all existing applications. | `apps edit` | ❌
`>applications delete [name]` | Delete an existing application in the server. If a name isn't provided, a menu will popup with names of all existing applications. | `apps delete` | ❌
`>apply [name]` | Submit (apply for) an application in the server. If a name isn't provided, a menu will popup with names of all enabled applications. | - | ❌

<DiscordMessages>
	<DiscordMessage>
		&gt;apply Moderation Team
	</DiscordMessage>
  <DiscordMessage author="Sentry" avatar="https://r.nziie.xyz/sentry-logo" bot verified>
    <DiscordEmbed slot="embeds" color="#5865f2">
      <DiscordEmbedDescription slot="description">
        Application process has started in your direct messages.
      </DiscordEmbedDescription>
      </DiscordEmbed>
      <DiscordAttachments slot="components">
        <DiscordActionRow>
          <DiscordButton url="https://nziie.xyz/video">
            Go to message
          </DiscordButton>
        </DiscordActionRow>
      </DiscordAttachments>
  </DiscordMessage>
</DiscordMessages>

## Question Types

### Long Text (default) {#question-type-long-text}

### Yes/No Choice {#question-type-yes-no}

### Multiple Choice {#question-type-multiple-choice}

## Limits
- Premium servers can have up to **25 questions**, while non-premium servers can only have **20 questions**
- Premium servers can have up to **10 total applications**, while non-premium servers can only have **5 total applications**.
- The multiple choice question type can only have up to 25 options, due to Discord rate limits.

## How do I have an app. response go to another server?
At this time, we do not have formal support for it. However, you can contact us in **[our support server]** and we can manually change the channel ID to any secondary server channel you'd like.

## Examples
<iframe width="560" height="315" src="https://www.youtube.com/embed/49HtP2jqfI0?si=morimq7F1WVhY9Zx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_WxZNhOmF7E?si=F083vhrFl29zEtxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>