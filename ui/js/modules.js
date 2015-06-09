var require = {
    'modules': [{
        'name': 'global/global.main',
        'override': {
            'wrap': {
                'startFile': 'ui/bower_components/almond/almond.js'
            }
        }
    }, {
        'name': 'example-section/example-section.main',
        'exclude': ['global', 'jquery', 'lodash']
    }]
};
