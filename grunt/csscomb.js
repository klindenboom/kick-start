module.exports = {
    dynamic_mappings: {
        expand: true,
        dot: true,
        cwd: '<%= paths.src %>/scss',
        src: ['**/*.{scss,css}'],
        dest: '<%= paths.src %>/scss/',
        ext: '.scss'
    }
};
