module.exports = {
    options: {
        livereload: true //may need to be false
    },
    server: {
        options: {
            port: 8088, // change this value if connect server fails with port already in use error
            base: ['<%= paths.tmpdev %>','<%= paths.src %>'],
            open: true,
            middleware: function(connect, options) {

                var injectLiveReload = require('connect-livereload');
                var connectSSI = require('connect-ssi');
                var middlewares = [];

                //Rewrite the default middleware stack
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                var directory = options.directory || options.base[options.base.length - 1];

                options.base.forEach(function(base) {
                // Serve static files.
                    middlewares.push(connect.static(base));
                });

                middlewares.push(connect.directory(directory));

                var bases = options.base;
                if(options.directory) {
                    bases.push(options.directory);
                }

                console.log(bases);

                var settings = {
                    baseDir: bases,
                    errorMessage: ''
                };

                middlewares.unshift(connectSSI(settings));

                return middlewares;
            }
        }
    },
    dist: {
        options: {
            base: ['<%= paths.dist %>'],
            open: true,
            livereload: false,
            keepalive: true
        }
    },
    docs: {
        options: {
            port: 9000,
            base: ['<%= paths.docs %>'],
            open: true,
            keepalive: true
        }
    }
};
