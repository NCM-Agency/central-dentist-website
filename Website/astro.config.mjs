// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site configuration for production
  site: 'https://www.centraldentist.com',
  
  // Build configuration
  build: {
    assets: '_astro'
  },
  
  // Output configuration for static site generation
  output: 'static',
  
  // Image optimization
  image: {
    domains: ['centraldentist.com', 'www.centraldentist.com']
  },
  
  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize for production
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          // Optimize chunk splitting
          manualChunks: {
            'vendor': ['astro']
          }
        }
      }
    },
    // Development server configuration
    server: {
      port: 4321,
      host: true
    }
  },
  
  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  
  // Markdown configuration (for future blog posts)
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: false
    }
  },
  
  // Security headers
  security: {
    checkOrigin: true
  }
});