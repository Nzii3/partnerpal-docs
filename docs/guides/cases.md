---
title: 📁 Cases
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

# Cases

Cases enable you to observe all moderation instances and actions within a server, whether ongoing or past occurrences, and also provide the capability to modify and manage your cases. They are never deleted automatically (only by user request via the **Delete** button) ensuring they are always there for future reference.

## Viewing a Case
To view a case, use `>case [case_id]`. The `case_id` argument is optional as if none is provided, the bot will pull up the most recently created case.

<details className="customdetails">
  <summary>Image Example</summary>
  
  ![](/img/case_details.png)
</details>