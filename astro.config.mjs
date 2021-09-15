  // astro.config.mjs
  export default {

   devOptions: {

     tailwindConfig: './tailwind.config.js',

   },
   buildOptions: {
   	site: 'https://zenia.my.id'
   },
   markdownOptions: {
   	remarkPlugins: [
   		[import('remark-breaks')],
   	],
   }
  };