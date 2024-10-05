/*
 * @Author: yangbo
 * @Date: 2024-09-18 13:58:33
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import electron from 'vite-plugin-electron';

import { resolve } from 'path';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // electron 配置
      path: 'path-browserify',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
      assert: 'assert',
      crypto: 'crypto-browserify',
      fs: false,
      https: 'https-browserify',
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    electron({
      entry: 'electron/main.js',
    }),
  ],
  build: {
    rollupOptions: {
      // input: {
      //   main: './src/main.ts',
      // },
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },

  // electron 配置
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  // transpileDependencies: true,
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       path: require.resolve('path-browserify'),
  //       https: require.resolve('https-browserify'),
  //       fs: false, // 如果不需要文件系统访问，可以设置为 false
  //       stream: require.resolve('stream-browserify'),
  //       assert: require.resolve('assert/'),
  //       zlib: require.resolve('browserify-zlib'),
  //     },
  //   },
  //   externals: {
  //     // 将 electron-devtools-installer 标记为外部模块，避免被打包
  //     'electron-devtools-installer': 'commonjs electron-devtools-installer',
  //   },
  // },
  // chainWebpack: config => {
  //   // 删除 preload 和 prefetch 插件以避免潜在冲突
  //   config.plugins.delete('preload');
  //   config.plugins.delete('prefetch');
  // },
  // pluginOptions: {
  //   electronBuilder: {
  //     nodeIntegration: true, // 启用 Node.js 集成
  //     externals: ['electron-devtools-installer'], // 外部化electron-devtools-installer
  //   },
  // },
});
