import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (como API_KEY) do sistema ou arquivo .env
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: false
    },
    // Define process.env.API_KEY globalmente para o navegador
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})