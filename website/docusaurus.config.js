// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const transformLinks = require('./src/plugins/transformLinks');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carbon Language',
  tagline: 'An experimental successor to C++',
  url: 'https://carbon-language.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // TODO: Fix broken links, and change this back to 'throw'
  onBrokenMarkdownLinks: 'ignore', // TODO: Fix broken markdown links, and change this back to 'warn'
  favicon: 'img/carbon-logo.png',

  // GitHub pages deployment config.
  organizationName: 'carbon-language',
  projectName: 'carbon-language.github.io',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/carbon-language/carbon-lang/blob/trunk/docs',
          beforeDefaultRemarkPlugins: [transformLinks],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Carbon Language',
        logo: {
          alt: 'Carbon Logo',
          src: 'img/carbon-logo.png',
        },
        items: [
          { to: '/design', label: 'Design', position: 'left' },
          { to: '/project', label: 'Project', position: 'left' },
          { to: '/guides', label: 'Guides', position: 'left' },
          { to: '/spec', label: 'Spec', position: 'left' },
          {
            href: 'https://github.com/carbon-language/carbon-lang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/carbon-language/carbon-lang',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ZjVdShJDAs',
              },
              {
                label: 'Code of Conduct',
                href: 'https://github.com/carbon-language/carbon-lang/blob/trunk/CODE_OF_CONDUCT.md',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;