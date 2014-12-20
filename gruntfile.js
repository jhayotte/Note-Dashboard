/**
* Created with t.
* User: jhayotte
* Date: 2014-12-20
* Time: 03:26 PM
* To change this template use Tools | Templates.
*/
// gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({
    nodemon: {
      all: {
        script: 'server.js',
        options: {
          watchedExtensions: ['js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default', ['nodemon']);

};
