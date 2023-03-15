import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    // alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    alias: { '@': path.join(__dirname, 'src') }
  },
}
)
