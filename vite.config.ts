import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';

    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      css: {
        postcss: './postcss.config.js',
        devSourcemap: !isProduction,
      },
      build: {
        cssCodeSplit: true,
        cssMinify: isProduction,
        rollupOptions: {
          output: {
            // Separate CSS files for better caching
            assetFileNames: (assetInfo) => {
              if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                return 'assets/styles-[hash][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
        // Enable source maps for debugging in production
        sourcemap: isProduction ? 'hidden' : true,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom'],
      },
    };
});
