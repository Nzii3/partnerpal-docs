---
title: 🕒 Time Arguments
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

Need help with Sentry's **time arguments (`?t` flag)** in commands? Then this is the guide for you!

## Breakdown
Key | Example | Output
--- | --- | --- |
`s` (seconds) | `>command ?t 10s` | 10 seconds
`m` (minutes) | `>command ?t 5m` | 5 minutes
`h` (hours) | `>command ?t 12h` | 12 hours
`d` (days) | `>command ?t 3d` | 3 days

:::warning
Decimal arguments (such as `0.5m` - 30 seconds) are not supported at this time.
:::

## Examples

<DiscordMessages>
  <DiscordMessage>
    &gt;command <DiscordMention>member</DiscordMention> ?t 30s
  </DiscordMessage>
  <DiscordMessage author="PartnerPal" avatar="https://cdn.discordapp.com/icons/1152732957849681942/34b3d771cc9aa4817ffafc137738b649.png?size=4096" roleColor="#5865f2" bot verified>
  <DiscordCustomEmoji name="check" url="/img/check.png" /> Input time taken as **30 seconds**
  </DiscordMessage>
</DiscordMessages>
<br/>
<DiscordMessages>
  <DiscordMessage>
    &gt;command <DiscordMention>member</DiscordMention> ?t 5m
  </DiscordMessage>
  <DiscordMessage author="PartnerPal" avatar="https://cdn.discordapp.com/icons/1152732957849681942/34b3d771cc9aa4817ffafc137738b649.png?size=4096" roleColor="#5865f2" bot verified>
  <DiscordCustomEmoji name="check" url="/img/check.png" /> Input time taken as **5 minutes**
  </DiscordMessage>
</DiscordMessages>
<br/>
<DiscordMessages>
  <DiscordMessage>
    &gt;command <DiscordMention>member</DiscordMention> ?t 12h
  </DiscordMessage>
  <DiscordMessage author="PartnerPal" avatar="https://cdn.discordapp.com/icons/1152732957849681942/34b3d771cc9aa4817ffafc137738b649.png?size=4096" roleColor="#5865f2" bot verified>
  <DiscordCustomEmoji name="check" url="/img/check.png" /> Input time taken as **12 hours**
  </DiscordMessage>
</DiscordMessages>
<br/>
<DiscordMessages>
  <DiscordMessage>
    &gt;command <DiscordMention>member</DiscordMention> ?t 3d
  </DiscordMessage>
  <DiscordMessage author="PartnerPal" avatar="https://cdn.discordapp.com/icons/1152732957849681942/34b3d771cc9aa4817ffafc137738b649.png?size=4096" roleColor="#5865f2" bot verified>
  <DiscordCustomEmoji name="check" url="/img/check.png" /> Input time taken as **3 days**
  </DiscordMessage>
</DiscordMessages>