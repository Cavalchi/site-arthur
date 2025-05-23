import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Importando o módulo path corretamente

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),      // página inicial
      },
    },
  },
})
