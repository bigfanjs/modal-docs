module.exports = {
  title: "Bigfan Modal",
  tagline:
    "Put all your modals in one place and prevent polluting the DOM with excessive nodes.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "bigfanjs",
  projectName: "modal",
  themeConfig: {
    navbar: {
      title: "bigfan modal",
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/bigfanjs/modal",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Built with  ❤️  by <a style="color:lightblue;font-weight:bold" href="https://twitter.com/bigfanjs">@bigfanjs</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bigfanjs/modal",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/bigfanjs/modal",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
