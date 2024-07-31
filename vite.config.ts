import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    mockDevServerPlugin(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        // https://icon-sets.iconify.design/ep/
        IconsResolver({
          enabledCollections: ['ep'] // 这里设置 ep 图标库
        }),
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    }),
    Inspect
  ],
  define: {},
  server: {
    proxy: {
      '^/api': { target: 'http://localhost:5173' }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // import.meta.url 返回的是一个字符串，表示当前模块文件的 URL 地址。
      '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@/views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@/hooks': fileURLToPath(new URL('./src/hooks', import.meta.url))
    }
  }
})
