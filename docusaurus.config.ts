import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import sidebarsProtodocs from './sidebarsProtodocs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// protodocs sidebar

interface SidebarItem {
  type: string;
  id?: string;
  items?: SidebarItem[];
}

const firstProtodoc = (): string => {
  let element: SidebarItem = sidebarsProtodocs.protodocs[0];
  while (element.type === 'category' && Array.isArray(element.items) && element.items.length > 0) {
    element = element.items[0];
  }
  if (element.type === 'doc' && element.id) {
    return element.id;
  }
  throw new Error('No valid document found in the sidebar');
};

// docusaurus config

const config: Config = {
  title: 'Message-exp',
  tagline: 'A messaging software dev team',
  favicon: 'img/favicon_msg_exp.ico',

  // Set the production url of your site here
  url: 'https://message-exp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'message-exp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/message-exp/docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/message-exp/docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          sidebarPath: './sidebarsProtodocs.js',
        }
      }
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Message-exp',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/message-exp/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: `protodocs/${firstProtodoc()}`,
          activeBasePath: 'protodocs',
          label: 'API',
          position: 'left',
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
              label: 'Docs',
              to: '/docs/docs/intro',  // here needs /docs prefix, but /blog not need it, why?
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/message-exp/docs',
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Message-exp team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
