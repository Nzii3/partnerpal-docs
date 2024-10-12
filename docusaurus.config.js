const path = require('path');
const {components} = require('./src/plugins/components');

module.exports = {
  scripts: [{
    src: '/discord-components.config.js',
    async: false
  }],
  title: 'PartnerPal',
  tagline: 'A customizable Discord bot made to help you grow your server with ease.',
  url: 'https://partnerpal.nziie.xyz',
  baseUrl: '/',
  favicon: 'img/logo.png',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  organizationName: 'Nzii3',
  projectName: 'sentry-docs',
  deploymentBranch:"main",
  themeConfig: {
    prism: {
      theme: require('./src/plugins/prism_themes/github'),
      darkTheme: require('./src/plugins/prism_themes/monokai'),
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    image: 'https://r.nziie.xyz/partnerpal-banner',
    metadata: [
      {name: 'keywords', content: 'discord bot, growth bot, discord partnering, grow your discord server'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'theme-color', content: '#3498db'},
    ],
    navbar: {
      title: 'PartnerPal',
      logo: {
        alt: 'PartnerPal Icon',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: 'updates', label: 'Updates', position: 'left'},
        {to: 'premium', label: 'Premium', position: 'right', className: 'gold-cycle'},
        {to: 'support', label: 'Support', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'Support',
              to: 'support',
            },
            {
              label: 'Documentation',
              to: 'getting-started',
            },
            {
              label: 'Troubleshooting',
              to: 'troubleshooting',
            },
          ],
        },
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Invite',
              to: 'invite',
            },
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Premium',
              to: 'premium',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: 'terms',
            },
            {
              label: 'Privacy Policy',
              to: 'privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PartnerPal Core Team`,
    },
    announcementBar: {
      id: 'announcementbar',
      content: `<strong><a href="https://cdn.nziie.xyz/u/files/bx8zzJhnINyK">Read about the FUTURE of Sentry...</strong>`,
      backgroundColor: 'var(--ifm-color-danger-darkest)',
      textColor: 'var(--ifm-primary-color)',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          feedOptions: {
            type: 'all',
          },
        },
      },
    ],
  ],
  plugins: [
  ],
};
