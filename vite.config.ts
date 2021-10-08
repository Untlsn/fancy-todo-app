import { defineConfig } from 'vite';
import { resolve } from 'path';
import refresh from '@vitejs/plugin-react-refresh';

const reactCompat = resolve(__dirname, 'node_modules/preact/compat');

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'react': reactCompat,
      'react-dom': reactCompat,
    },
  },
  plugins: [refresh()],
});
