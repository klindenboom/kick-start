module.exports = {
    css: {
        expand: true,
        dot: true,
        cwd: '<%= paths.tmpdist %>',
        dest: '<%= paths.dist %>',
        src: [
            'js/{,*/}*.*',
            'css/{,*/}*.*',
            'oldie-css/{,*/}*.*'
        ]
    }
};
