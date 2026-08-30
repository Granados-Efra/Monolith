import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
//@ts-ignore
import { version as tsVersion } from 'typescript/package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_TS_VERSION': JSON.stringify(tsVersion)
  }
})
