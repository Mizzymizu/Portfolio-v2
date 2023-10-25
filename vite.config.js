import { defineConfig } from 'vite'
import react from '@vite/plugin-react'

export default defineConfig({
    plugin: [react()],
    server: {
        port: 3000,
        open: true
    }
})