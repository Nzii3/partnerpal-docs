---
sidebar_position: 4
title: 📢 Updates
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Check out our [Clickup Roadmap](https://sharing.clickup.com/36041748/l/h/6-900902486041-1/c850810baf29f0f) to see new and upcoming features!

## v1.2.0 <span className="badge badge--primary">LATEST</span> {#v1.2.0}
Released [2/17/2024](./updates.md)

<Tabs>
  <TabItem value="added" label="Added (4)" default>
  - [Modmail System](/guides/modmail.md)
    - Added future support for claiming and other desirable modmail features
  - Better custom branding support (internal)
  - [Dashboard sneak peak](https://cdn.discordapp.com/attachments/1191751051062284349/1208135864102813806/image.png?ex=65e22f34&is=65cfba34&hm=9a618c0904ddc3934138630d5ec374053b35bdb983ba0d0fb65a5c0551075532&)
  </TabItem>
  <TabItem value="fixed" label="Fixed (5)">
    - Fixed an issue when selecting an answer for a multiple choice answer type in an application, the selection wouldn't show in the menu as intended
    - Fixed an issue where the `>apply` command would somtimes fail if it took to long to respond to the button interaction
    - Fixed an issue where some features that needed a user from a server, it would fail and show an unknown user error
      - *This fixes the force-ban command not showing the force-ban prompt*
    - Fixed small typos in documentation and bot responses
    - Fixed other minor — yet rare — bugs
  </TabItem>
</Tabs>

## v1.1.0 {#v1.1.0}
Released [1/4/2024](./updates.md)

<Tabs>
  <TabItem value="added" label="Added (3)" default>
  - [Custom Applications system](/guides/applications.md)
  - Total project lines stat in `>stats` command
  - Support for more than 9 warnings for a custom punishment condition (community requested)
  </TabItem>
  <TabItem value="fixed" label="Fixed (2)">
    - Cooldown times not showing correctly on mobile, moved away from Discord timestamps
    - Fixed minor bugs
  </TabItem>
</Tabs>

## v1.0.2 {#v1.0.2}
Released [12/26/2023](./updates.md)

<Tabs>
  <TabItem value="added" label="Added (1)">
    - [Custom Menus](/guides/templates.md#custom-menus) for Message Templates
  </TabItem>
</Tabs>

## v1.0.1 {#v1.0.1}
Released [12/24/2023](./updates.md)

<Tabs>
  <TabItem value="added" label="Added (1)">
    - Support for custom bots and on the fly code updates (for developers)
  </TabItem>
  <TabItem value="fixed" label="Fixed (3)">
    - "User Info" context menu raising an error
    - Images not showing on the `>case` command
    - Minor v1.0.0 bugs
  </TabItem>
</Tabs>

## v1.0.0
Released [12/23/2023](./updates.md)

<Tabs>
  <TabItem value="added" label="Added (1)">
    - Everything, official release. All features from beta and bug fixes.
  </TabItem>
  <TabItem value="fixed" label="Fixed (1)">
   - Bugs that occured from the official release
  </TabItem>
</Tabs>
