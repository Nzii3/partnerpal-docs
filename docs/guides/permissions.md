---
title: 🔑 Permissions
---
# Permissions

:::warning
Sentry uses a strict permits only system for use of it's commands. Therefore, if a user has Discord permissions for a command (such as kick members), they will still need to have a role with a permit that has the kick members permission.

> **Server administrators are the only users that bypass any permission.**
:::


### Configuring {#configuring-permits}
1. Use the `>settings` command and navigate to the **Permits** tab using the dropdown. 

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