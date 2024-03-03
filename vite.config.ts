import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgr from 'vite-plugin-svgr';
console.log(123);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    // svgr({
    //   include: '**/*.svg?react',
    // }),
  ],
});
