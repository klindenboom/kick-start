module.exports = {
    tmpdist: {
        /* HTML */
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.tmpdist %>',
            src: [
                '{,*/}*.html'
            ]
        },
        /* Includes */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.tmpdist %>',
            src: [
                '{,*/}incl/{,*/}*.*'
            ]
        }]
    },
    // For Distribution Builds
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= paths.tmpdist %>',
            dest: '<%= paths.dist %>',
            src: [
                'js/{,*/}*.*'
            ]
        },
        /* Bower, will remove once require build is working right */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.dist %>',
            src: [
                'bower_components/{,*/}*.*'
            ]
        },
        /* HTML From TMPDIST, will only overwrite if SSI-DIST task is run*/
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.tmpdist %>',
            dest: '<%= paths.dist %>',
            src: [
                '{,*/}*.html'
            ]
        },
        /* Images */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.dist %>',
            src: [
                'img/{,*/,**/}*.{png,jpg,jpeg,gif}'
            ]
        },
        /* Content */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.dist %>',
            src: [
                'content/{,*/,**/}*.*'
            ]
        },
        /* Fonts */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.dist %>',
            src: [
                'fonts/{,*/,**/}*.{eot,svg,ttf,woff,otf}'
            ]
        },
        /* Includes */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.tmpdist %>',
            dest: '<%= paths.dist %>',
            src: [
                '{,*/}incl/{,**/}*.*'
            ]
        },
        /* Other Files */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: '<%= paths.dist %>',
            src: [
                '*.{txt,xml,ht*}'
            ]
        }]
    },

    // Copy Documentation
    docs: {
        files: [{ /* Images */
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: 'docs/css',
            src: ['img/{,*/,**/}*.{png,jpg,jpeg,gif}']
        },
        /* Fonts */
        {
            expand: true,
            dot: true,
            cwd: '<%= paths.src %>',
            dest: 'docs/css',
            src: ['fonts/**']
        }]
    }
};
