module.exports = {
    dist: {
        options: {
            optimize: 'uglify',
            removeCombined: true,
            baseUrl: 'ui/js',
            mainConfigFile: ['ui/js/config.js', 'ui/js/modules.js'],
            dir: '<%= paths.tmpdist %>/js'
        }
    },
    distAmdClean: {
        options: {
            optimize: 'none',
            removeCombined: true,
            baseUrl: 'ui/js',
            mainConfigFile: ['ui/js/config.js', 'ui/js/modules-amdclean.js'],
            dir: '<%= paths.tmpdist %>/js',
            onModuleBundleComplete: function(data) {
                var fs = require('fs'),
                    amdclean = require('amdclean'),
                    outputFile = '.tmp/dist/js/' + data.path;

                fs.writeFileSync(outputFile, amdclean.clean({
                    'filePath': outputFile
                }));
            }
        }
    }
};
