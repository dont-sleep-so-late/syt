import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node提供内置模块path:可以获取绝对路径
import path from 'path';
import { env } from 'process';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //src配置路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  server: {
    // host:'localhost'，//只能本地访问
    // host: '0.0.0.0',//局域网别人也可访问
    port: Number(env.VITE_APP_PORT),
    // 运行时自动打开浏览器
    // open: true,
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
      }
    }
  }
})
