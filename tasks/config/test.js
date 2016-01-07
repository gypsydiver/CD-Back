module.exports = function(grunt) {
	grunt.config.set('mocha_istanbul', {
  	coverage: {
	    src: 'test', // the folder, not the files
	    options: {
				timeout: '20s',
	      coverageFolder: 'coverage',
	      mask: 'unit/**/*.test.js',
	      root: 'tests/'
	    }
  	}
	});
	grunt.loadNpmTasks('grunt-mocha-istanbul');
};
