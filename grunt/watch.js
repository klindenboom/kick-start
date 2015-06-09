module.exports = {
    compass: {
        files: ['<%= paths.src %>/scss/{,*/}*.*'],
        tasks: [
            //'newer:csscomb',
            'compass:dev',
            'compass:devie',
            'autoprefixer:dev']//, 'newer:csslint:dev'
    },
    html: {
        files: [
            '{<%= paths.src %>,<%= paths.tmpdev %>}/{,*/}*.html',
            '{<%= paths.src %>,<%= paths.tmpdev %>}/incl/{,*/}*.{html,incl,inc}'
        ],
        tasks: ['jsbeautifier:src'],
        options: {
            livereload: false,
            reload: true
        }
    },
    js: {
        files: ['<%= paths.src %>/js/**/*.js'],
        tasks: ['jsbeautifier:src']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '{<%= paths.src %>,<%= paths.tmpdev %>}/{,*/}*.html',
            '{<%= paths.src %>,<%= paths.tmpdev %>}/incl/{,*/}*.{html,incl,inc}',
            '<%= paths.tmpdev %>/css/{,*/}*.css',
            '<%= paths.src %>/js/{,*/}*.js',
            '<%= paths.src %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
};
