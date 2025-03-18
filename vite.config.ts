import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import electron from "vite-plugin-electron";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  build:{
    outDir:"dist-react"
  },

  server:{
    port:5123,
    strictPort:true
  }
})
