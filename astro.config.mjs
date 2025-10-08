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

  // 301 Redirects for consolidated service pages
  redirects: {
    // Advanced Technologies consolidation
    '/services/cbct': {
      status: 301,
      destination: '/services/advanced-technologies#cbct'
    },
    '/services/ozone-therapy': {
      status: 301,
      destination: '/services/advanced-technologies#ozone'
    },
    '/services/ceramic-implants': {
      status: 301,
      destination: '/services/advanced-technologies#ceramic-implants'
    },
    // Mercury-Free Approach consolidation
    '/services/bonding': {
      status: 301,
      destination: '/services/mercury-free-approach#fluoride-free'
    },
    '/services/mercury-free': {
      status: 301,
      destination: '/services/mercury-free-approach'
    },
    // Functional Health consolidation
    '/services/sleep-breathing': {
      status: 301,
      destination: '/services/functional-health#sleep'
    },
    '/services/tmj': {
      status: 301,
      destination: '/services/functional-health#tmj'
    },
    // Other broken URL redirects
    '/our-philosophy': {
      status: 301,
      destination: '/philosophy'
    },
    '/advanced-diagnostics': {
      status: 301,
      destination: '/services/advanced-diagnostics'
    },
    '/reviews': {
      status: 301,
      destination: '/reviews-testimonials'
    },
    '/services/healthy-start': {
      status: 301,
      destination: '/services/pediatric-healthy-start'
    },
    '/appointment': {
      status: 301,
      destination: '/contact'
    }
  },
  
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