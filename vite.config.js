import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: 'https://adminapi-fcjc.onrender.com',
  plugins: [react()],
});
