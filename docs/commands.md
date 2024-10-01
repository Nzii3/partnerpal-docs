---
title: 💬 Commands
sidebar_position: 2
---

import Link from '@docusaurus/Link';
import classnames from 'classnames';

:::tip
An argument surrounded in paranthesis: `(@member)` means the argument is **optional**

An argument surrounded in angle branckets: `<@member>` means the argument is **required** for a command to function
:::

## General Commands
:::tip
If you're on mobile, you can scroll horizontally to view the entire table.
:::
Usage   | Description |
--- | --- |
<mention>/help</mention> | Shows PartnerPal's help menu and helpful information
<mention>/settings</mention> | Setup the bot and manage server-specific settings
<mention>/partner</mention> | Partner with a random server using PartnerPal
<mention>/partner-mass</mention> | ([Premium](/premium)) Partner with 10 servers with one command
<mention>/premium</mention> | See information about PartnerPal premium 

## Template Commands
:::tip
If you're on mobile, you can scroll horizontally to view the entire table.
:::
Name | Description | Example |
--- | --- | --- |
<mention>/templates messages create</mention> | Create a message template | <mention>/templates messages create name:Self Roles</mention>
<mention>/templates buttons create</mention> | Create a button template for a message | <mention>/templates buttons create label:Self role button</mention>
<mention>/templates messages edit</mention> | Edit a message template | -
<mention>/templates buttons edit</mention> | Edit a button template | -
<mention>/templates messages delete</mention> | Delete a message template | -
<mention>/templates buttons delete</mention> | Delete a button template | -
**Webhooks:** <mention>/templates webhooks create</mention> | Create a webhook to send templates with buttons | -
**Sending:** <mention>/templates messages send</mention> | Send a message template in a channel | -
**Editing:** <mention>/templates messages edit_message</mention> | Edit a message (or bot webhook message) to update the template on that message | -
<mention>/templates menus create</mention> | Create a custom menu for message templates | -
<mention>/templates menus edit</mention> | Edit a custom menu template | -
<mention>/templates messages delete</mention> | Delete a custom menu template | -