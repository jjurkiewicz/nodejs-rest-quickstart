/* global module, require */
'use strict';


// grunt.loadNpmTasks('grunt-blanket-mocha');

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// chekstyle for js
		// blanket: {
		//     options: {},
		//     files: {
		//       'src-cov': ['app'],
		//     },
		//  },
  // 		mocha: {
		//   test: {
		//     src: ['test/**/*.js'],
		//     reporter: 'XUnit',
		//     dest: 'tmp/xunit-mocha.xml',
		//   },
		// },

		 // mochaTest: {
		 //      test: {
		 //        options: {
		 //          reporter: 'Xunit',
		 //          captureFile: 'tmp/xunit-mochaTest.xml',
		 //          quiet: true,
		 //        },
		 //        src: ['test/**/*.js'],
		   
		 //      }
		 // }

		 simplemocha: {
		    options: {
		      timeout: 3000,
		      ignoreLeaks: false,
		      reporter: 'XUnit'
		    },

		    all: { 
		    	src: ['test/**/*.js'],
		    	dest: ['tmp/xunit-simplemocha.xml']
			}
		 },

		 shell: {
			 jenkins: {
			 	command: 'mocha --reporter mocha-jenkins-reporter test/**/*.js'

			 }
		}

		 // blanket_mocha: {
		 //    src: [ paths.test +  '/**/*.js' ],
		 //    options: {
		 //        threshold: 70,
		 //    },
		 //   run: true

		 // }
	
});

	grunt.registerTask('default', [
		'shell:jenkins'	// run unit tests
	]);

	// Development
	// grunt watch				// watch for changes in js files in order to run tests
	// grunt nodemon			// start nodejs and reload on changes

};
