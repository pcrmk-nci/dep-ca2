module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      all: ['*.js']
    },

    bower: {
    	install: {
    		options: {
    			targetDir: 'app/lib',
    			layout: 'byComponent',
    			cleanTargetDir: true,
    			install: true,
    			verbose: false,
    			bowerOptions: {
    				production: true
    			}
    		}
    	}
    }
  });
 
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint', 'bower:install']);
};