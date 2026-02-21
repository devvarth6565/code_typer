import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (or whichever framework you chose)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})