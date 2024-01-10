const path = require('path');
const {components} = require('./src/plugins/components');

module.exports = {
  title: 'Sentry',
  tagline: 'A customizable Discord bot made to help you manage your server.',
  url: 'https://sentry.nziie.xyz',
  baseUrl: '/sentry-docs-new/',
  favicon: 'img/logo.png',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  organizationName: 'nziiedev',
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
    image: 'img/logo.png',
    metadata: [
      {name: 'keywords', content: 'benthos, stream processor, data engineering, ETL, ELT, event processor, go, golang'},
      {name: 'twitter:card', content: 'summary'},
    ],
    navbar: {
      title: 'Sentry',
      logo: {
        alt: 'Sentry Bot Icon',
        src: 'img/logo.png',
      },
      items: [
        {to: 'docs/about', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'community', label: '⭐ Premium', position: 'right'},
        {to: 'support', label: 'Support', position: 'right'},
        {
          href: 'https://github.com/benthosdev/benthos/releases/latest',
          position: 'right',
          className: 'header-download-link header-icon-link',
          'aria-label': 'Discord',
        },
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
              to: 'docs/guides/getting_started',
            },
            {
              label: 'Videos',
              to: 'videos',
            },
          ],
        },
        {
          title: 'Swag',
          items: [
            {
              label: 'Meet the Mascot',
              to: 'blobfish',
            },
            {
              label: 'Purchase Stickers',
              href: 'https://www.redbubble.com/people/earzola/shop',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join the chat',
              to: 'community',
            },
            {
              label: 'See the Code',
              href: 'https://github.com/benthosdev/benthos',
            },
            {
              label: 'Sponsor the Developers',
              href: 'https://github.com/sponsors/Jeffail',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sentry Core Team`,
    },
    // announcementBar: {
    //   id: 'star_the_dang_repo',
    //   content: `<strong>Hey, 🫵 you, make sure you've <a target="_blank" rel="noopener noreferrer" href="https://github.com/benthosdev/benthos">⭐ starred the repo ⭐</a> otherwise you won't be entered into our daily prize draw for silent admiration.</strong>`,
    //   backgroundColor: 'var(--ifm-color-primary)',
    //   textColor: 'var(--ifm-background-color)',
    //   isCloseable: true,
    // },
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
    path.resolve(__dirname, './src/plugins/analytics'),
  ],
};
