module.exports = {
    options: {
        sassDir: '<%= paths.src %>/scss',
        cssDir: '<%= paths.tmpdev %>/css',
        imagesDir: '<%= paths.src %>/img',
        javascriptsDir: '<%= paths.src %>/js',
        fontsDir: '<%= paths.src %>/fonts',
        httpPath: '/',
        httpImagesPath: 'img',
        httpGeneratedImagesPath: '../img',
        httpFontsDir: 'fonts'
    },
    dev: {// dev build
        options: {
            importPath: '<%= paths.src %>/scss_imports/modern',
            environment: 'development'
        }
    },
    dist: {
        options: {
            cssDir: '<%= paths.tmpdist %>/css',
            importPath: '<%= paths.src %>/scss_imports/modern',
            environment: 'production'
        }
    },
    devie: {// dev build
        options: {
            cssDir: '<%= paths.tmpdev %>/oldie-css',
            importPath: '<%= paths.src %>/scss_imports/oldie',
            environment: 'development'
        }
    },
    distie: {
        options: {
            cssDir: '<%= paths.tmpdist %>/oldie-css',
            importPath: '<%= paths.src %>/scss_imports/oldie',
            environment: 'production'
        }
    },
    docs: {
        options: {
            cssDir: 'docs/css/public',
            httpImagesPath: 'css/img',
            generatedImagesDir: '../',
            httpGeneratedImagesPath: '../img',
            httpFontsDir: 'css/fonts'
        }
    }
};
