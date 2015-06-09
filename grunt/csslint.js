// https://github.com/gruntjs/grunt-contrib-csslint
// https://github.com/stubbornella/csslint
module.exports = {
    options: {
        csslintrc: '.csslintrc',
        formatters: [
            {
                id: 'text',
                dest: 'docs/reports/csslint.txt'
            }
        ]
    },
    dev: {
        src: [
            '.tmp/dev/css/**/*.css',
            '!.tmp/dev/css/uncss.css'
        ]
    }
};
