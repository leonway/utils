import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('dist'),
      exclude: resolve('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ],
  build: {
    outDir: 'dist',
    cssTarget: 'chrome61',
    lib: {
      // 源码的入口文件
      entry: resolve('src/index.ts'),
      // 名称
      name: '@rokid-library/utils',
      // 文件名称, 打包结果举例: index.umd.js
      fileName: (format, entry) => `${entry}.${format}.js`,
      // 打包类型
      formats: ['es', 'umd', 'cjs', 'iife'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'antd'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          antd: 'antd',
        },
        extend: true,
      },
    },
    // watch: {
    //   // clearScreen: true
    //   include: './src/**',
    // },
  },
});
