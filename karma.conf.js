// Karma configuration
// Generated on Sun Aug 07 2016 00:16:03 GMT+0100 (GMT Summer Time)

//noinspection JSUnresolvedVariable
module.exports = function (config) {
    //noinspection JSUnresolvedVariable
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'source/js/lib/*.js',
            'source/js/src/core.js',
            'source/js/src/config.js',
            {
                pattern: 'source/js/test/*.js',
                included: true,
                served: true,
                nocache: true
            },
            {
                pattern: 'source/js/test/*/*.js',
                included: true,
                served: true,
                nocache: true
            },
            {
                pattern: 'source/js/**',
                included: false,
                served: true,
                nocache: true
            },
            {
                pattern: 'source/samples/**',
                included: false,
                served: true,
                nocache: true
            }
        ],


        // list of proxy rules
        proxies: {
            "/js": "/base/source/js",
            "/samples": "/base/source/samples"
        },


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // coverage reporters
        coverageReporter: {
            type: 'lcovonly',
            dir: 'coverage/'
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'source/js/src/**/*.js': ['coverage']
        },


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS_custom'],


        // you can define custom flags
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    settings: {
                        webSecurityEnabled: false
                    }
                }
            }
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,


        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
