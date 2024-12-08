import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'

export default {
   server: {
      port: 3000,
   },
   root: 'src',
   emptyOutDir: true,
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            // about: resolve(__dirname, './src/'),
         },
      },
   },
   css: {
      devSourcemap: true,
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler', // or "modern"
         },
      },
      postcss: {
         plugins: [
            postCssPxToRem({
               propList:
                  process.env.NODE_ENV === 'development' ? ['!*'] : ['*'],
            }),
            autoprefixer,
         ],
      },
   },
}
