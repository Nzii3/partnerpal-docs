---
title: 🚩 Flags
---

import Link from '@docusaurus/Link';
import classnames from 'classnames';
import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

# 🚩 Command Argument Flags
Sentry employs argument flags for precise argument slicing without truncating content. This manual includes explanations for each flag, it's acceptable inputs, and instructions on usage. In the event of a missing required flag for a command, the bot will prompt you to supply it in the usage before proceeding with the command's execution.

Name | Description | Accepted Values | Example
--- | --- | --- | --- |
`?reason` or `?r` | The desired reason for the moderation action, can be edited in `>case`'s `Edit` button | Any string of text, links are accepted | <DiscordMessages><DiscordMessage>&gt;warn <DiscordMention>vNziie--</DiscordMention> ?r Spamming</DiscordMessage></DiscordMessages>
`?time` or `?t` | Duration for the action, available for `>warn` and `>mute` | <Link className={classnames("button button--outline button--primary button--small")} to="/time-arguments">Time Arguments Guide</Link> | <DiscordMessages><DiscordMessage>&gt;warn <DiscordMention>vNziie--</DiscordMention> ?r Spamming ?t 12h</DiscordMessage></DiscordMessages>
`?p` | Proof for the moderation action - such as an image link, can be edited in `>case`'s `Edit` button | Any string of text, links are accepted | <DiscordMessages><DiscordMessage>&gt;warn <DiscordMention>vNziie--</DiscordMention> ?r Spamming ?p https://nziie.xyz/video</DiscordMessage></DiscordMessages>
`?severity` or `?s` | The severity of the warning, available for `>warn`. See <Link className={classnames("button button--outline button--primary button--small")} to="/punishments">Custom Punishments</Link>. | `low`, `medium` or `high` | <DiscordMessages><DiscordMessage>&gt;warn <DiscordMention>vNziie--</DiscordMention> ?r Spamming ?s medium</DiscordMessage></DiscordMessages>

:::info
Every flag not listed here accepts a normal text string.
:::