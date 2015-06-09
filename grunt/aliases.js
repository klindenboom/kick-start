module.exports = {
    'default': [
        'clean:server',
        'compass:dev',
        'compass:devie',
        'autoprefixer:dev',
        'jshint:all',
        'connect:server',
        'watch'
    ],
    'build': [
        'clean:dist',
        'compass:dist',
        'compass:distie',
        'requirejs:dist',
        'filerev',
        'filerevIncludes:dist',
        'copy:tmpdist',
        'autoprefixer:dist',
        'processhtml',
        'copy:dist'
    ],
    'build-ssi': [
        'clean:dist',
        'compass:dist',
        'compass:distie',
        'requirejs:dist',
        'filerev',
        'filerevIncludes:dist',
        'copy:tmpdist',
        'autoprefixer:dist',
        'processhtml',
        'ssi:dist'
        // 'copy:dist',
        // 'connect:dist'
    ],
    'lint': [
        'newer:jshint:all',
        'newer:csslint:dev'
    ],
    'docs': [
        'clean:docs',
        'jsdoc:dist',
        'kss:docs',
        'compass:docs',
        'copy:docs',
        'connect:docs'
    ],
    'testlocal': [
        'gremlins:local'
    ]
};
