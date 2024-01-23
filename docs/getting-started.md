---
title: 🚀 Getting Started
description: Getting started with Sentry.
sidebar_position: 1
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

## Setup
Use the `>setup` command command to have an easy setup solution. Sentry will make sure it has the correct permissions in the server to operate. The bot will alert you of any permissions that are missing.

<DiscordMessages>
	<DiscordMessage author="Sentry" avatar="https://r.nziie.xyz/sentry-logo" roleColor="#5865f2" bot verified>
		Hello! I'm <DiscordMention>Sentry</DiscordMention>!
	</DiscordMessage>
</DiscordMessages>

## Permits (Permissions) {#permissions}
Permits allow you to confidently manage permissions for specific roles. You can assign permissions to a permit and assign roles to said permit. 

:::warning
Sentry uses a strict permits only system for use of it's commands. Therefore, if a user has Discord permissions for a command (such as kick members), they will still need to have a role with a permit that has the kick members permission.

> **Server administrators are the only users that bypass any permission.**
:::


### Configuring {#configuring-permits}
1. Use the `>settings` command and navigate to the <span class="badge badge--primary">Permits</span> tab using the dropdown. 

2. On the permits page, you will see all pre-defined levels of permits, their (customizable) assigned permissions, and their (customizable) assigned roles. Any role listed attached to a permit can use any command that requires the attached permisisons. The permissions should be pretty straight forward to what commands they relate to. 

<details className="customdetails">
<summary>🔑 Permissions Key</summary>

:::info
In order of how dangerous the permission can be in a server if given to the wrong person.
:::

**Manage Cases** --> `>case` and `>cases`. Can edit/delete cases.

**Manage Appeals** --> *Can accept, deny, and ignore appeals, full control over appeals. This permission is not used since the Appeals System is coming soon.*

**Warn Members** --> `>warn`, can use any severity

**Mute Members** --> `>mute` and `>unmute`.

**Kick Members** --> `>kick`

**Ban Members** --> `>ban` and `>unban`

**Manage Lockdown** --> `>lockdown` (coming soon)

**Full Control** --> *This is a dangerous to give, as they have full control over settings and all commands.*

</details>

---

:::success 
Your server is now setup with **Sentry**! If you would like to view Sentry's list of commands, you can do so on the 
:::
