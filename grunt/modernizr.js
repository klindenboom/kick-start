module.exports = {
	dist: {
		'devFile': '<%= paths.src %>/bower_components/modernizr/modernizr.js',
        'outputFile': '<%= paths.tmpdist %>/js/vendor/modernizr.js',
        'files': {
        	src: [
        		'<%= paths.src %>/js/**/*.js',
        		'<%= paths.src %>/scss/**/*.scss'
        	]
    	}
    }
};
