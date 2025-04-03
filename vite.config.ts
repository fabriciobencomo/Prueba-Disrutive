import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Add Vitest configuration
  test: {
    globals: true, // Activa los globals para poder usar expect sin necesidad de importarlo
    environment: 'jsdom', // Asegúrate de usar jsdom como entorno de pruebas
    setupFiles: './setupTests.ts', // Archivo de configuración opcional
  },
})
