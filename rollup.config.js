import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'build/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Main'
  },
  plugins: [
    resolve({
      extensions: [ '.js' ]
    })
  ]
}
