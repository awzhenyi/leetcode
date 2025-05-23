import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://awzhenyi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/leetcode/',
  deploymentBranch: 'master',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'awzhenyi', // Usually your GitHub org/user name.
  projectName: 'leetcode', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'neetcode150',
        path: 'neetcode150',
        routeBasePath: 'neetcode150',
        sidebarPath: require.resolve('./sidebars.ts'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'grind169',
        path: 'grind169',
        routeBasePath: 'grind169',
        sidebarPath: require.resolve('./sidebars.ts'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'others',
        path: 'others',
        routeBasePath: 'others',
        sidebarPath: require.resolve('./sidebars.ts'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'random',
        path: 'random',
        routeBasePath: 'random',
        sidebarPath: require.resolve('./sidebars.ts'),
      }, 
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DSA prep',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          label: 'Grind 169',
          href: '/grind169/intro',
          sidebarId: 'tutorialSidebar',
        },
        {
          type: 'docSidebar',
          label: 'Neetcode 150',
          href: '/neetcode150/intro',
          sidebarId: 'tutorialSidebar',
        },
        {
          type: 'docSidebar',
          label: 'Others',
          href: '/others/intro',
          sidebarId: 'tutorialSidebar',
        },
        {
          type: 'docSidebar',
          label: 'Random Info',
          href: '/random/intro',
          sidebarId: 'tutorialSidebar',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
