module.exports = {
    options: {
        mode: 'VERIFY_AND_WRITE'
    },
    src: {
        src: ['<%= paths.src %>/js/**/*.js', '<%= paths.src %>/*.html']
    }
};
