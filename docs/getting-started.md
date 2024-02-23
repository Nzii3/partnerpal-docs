---
title: 🚀 Getting Started
description: Getting started with Sentry.
sidebar_position: 1
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

## Setup
Use the `>setup` command command to have an easy setup solution. Sentry will make sure it has the correct permissions in the server to operate. The bot will alert you of any permissions that are missing.

<DiscordMessages>
	<DiscordMessage profile="sentry">
		Hello, I'm <DiscordMention>Sentry</DiscordMention>! Feel free to use <code>>help</code> for more information about my features.
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

**Manage Cases** <span style={{'color': '#5865f2'}}>→</span> `>case` and `>cases`. Can edit/delete cases.

**Manage Application Responses** <span style={{'color': '#5865f2'}}>→</span> *Can accept and deny application responses.*

**Manage Modmail Threads** <span style={{'color': '#5865f2'}}>→</span> `>reply`, `>areply`, `>close`, *and thread related commands. Can manage modmail threads.*

**Manage Appeals** <span style={{'color': '#5865f2'}}>→</span> *Can accept, deny, and ignore appeals, full control over appeals.* **(coming soon)**

**Warn Members** <span style={{'color': '#5865f2'}}>→</span> `>warn`, can use any severity

**Mute Members** <span style={{'color': '#5865f2'}}>→</span> `>mute` and `>unmute`.

**Kick Members** <span style={{'color': '#5865f2'}}>→</span> `>kick`

**Ban Members** <span style={{'color': '#5865f2'}}>→</span> `>ban` and `>unban`

**Manage Lockdown** <span style={{'color': '#5865f2'}}>→</span> `>lockdown` **(coming soon)**

**Full Control** <span style={{'color': '#5865f2'}}>→</span> *This is a dangerous to give, as they have full control over settings and all commands.*

</details>

## Success

:::success 
Your server is now setup with **Sentry**! If you would like to view Sentry's list of commands, you can do so on the 
:::
