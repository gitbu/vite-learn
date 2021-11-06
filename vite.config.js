import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2'
import html from 'vite-plugin-html'


export default ({ mode }) => {
  const DEV = mode === 'development';

  return defineConfig({
    base: '',
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    plugins: [
      createVuePlugin(),
      html({
        inject: {
          data: {
            title: 'test',
          injectScript: `${DEV ? '<script src="./test.js"></script>' : '<!-- #include file="test.js" -->'}`
          }
        }
      }) 
    ],
  })
}