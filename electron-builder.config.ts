import type { Configuration } from 'electron-builder'

export default {
  appId: 'com.example.viteelectronapp',
  productName: 'Vite React Tailwind Electron Starter',

  directories: {
    buildResources: 'resources',
    output: 'dist/electron-pack',
  },

  files: [
    'dist/app/**/*',
    'dist/electron/**/*',
    'package.json',
    'resources/**',
  ],
  asar: true,
  asarUnpack: ['node_modules/**'],

  protocols: [
    {
      name: 'VSXD', // vite starter x demo
      schemes: ['vsxd'],
    },
  ],

  win: {
    icon: 'resources/logo.ico',
    target: ['nsis'],
  },
  nsis: {
    oneClick: false,
    perMachine: true,
    allowToChangeInstallationDirectory: true,
  },
  mac: {
    target: 'dmg',
  },
  linux: {
    target: 'AppImage',
  },
} satisfies Configuration
