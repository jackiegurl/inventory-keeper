module.exports = function(grunt) {
  var cssFiles = [
  'assets/css/stylesheet.css'
  ]

  var nonStaticJSFiles = [
   'client/*.js',
   'client/components/*.js',
   'client/components/*/*.js',
   'client/components/*/*/*.js'
  ]

  var cssJS = cssFiles.concat(nonStaticJSFiles);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      webpackCheck: {
        entry: './client/components/main/main.js',
        output: {
          filename: './client/bundle.js'
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules)/,
              loader: 'babel'
            }
          ]
        }
      }
    },
    watch: {
      files: cssJS,
      tasks: ['default']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack']);
}