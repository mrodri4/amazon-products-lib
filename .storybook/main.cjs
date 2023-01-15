const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '#enums': path.join(__dirname, '../src/enums'),
          '#utils': path.join(__dirname, '../src/utils'),
          '#types': path.join(__dirname, '../src/types')
        }
      }
    });
  }
};
