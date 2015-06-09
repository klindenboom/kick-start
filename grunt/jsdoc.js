// https://github.com/krampstudio/grunt-jsdoc
// https://github.com/jsdoc3/jsdoc
module.exports = {
    dist: {
        src: ['ui/js/**/*.js', 'readme.md'],
        dest: 'docs/js',
        options: {
            configure: 'jsdoc.conf.json',
            template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
            tutorials: 'ui/js/_tutorials/'
        }
    }
};
