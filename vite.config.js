import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-control-overlay'],
        lang: 'en-EN',
        name: 'SW Heroes Finder PWA',
        short_name:'PWA',
        description: 'Example of PWA',
        theme_color: '#19223c',
        background_color: '#d4d4d4',
        icons: [
          {
            src: "/pwa-64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "/pwa-192.svg",
            sizes: "192x192",
            type: "image/png",
            purpose:"any"
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type:"image/png",
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  
})
