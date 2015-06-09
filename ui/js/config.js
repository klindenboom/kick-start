var require = {
    'baseUrl': '/js',
    'paths': {
        'common': 'common',
        'jquery': '../bower_components/jquery/dist/jquery',
        'text': '../bower_components/requirejs-text/text',
        'ic': '../bower_components/ic/lib',
        'fastclick': '../bower_components/fastclick/lib/fastclick',
        'swipe': '../bower_components/swipe/swipe',
        'slick-carousel': '../bower_components/slick-carousel/slick/slick',
        'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
        'lodash': '../bower_components/lodash/dist/lodash',
        'gremlins': '../bower_components/gremlins.js/gremlins.min'
    },
    'shim': {
        'swipe': {
            'exports': 'Swipe'
        }
    },
    'packages': ['global', 'example-section']
};
