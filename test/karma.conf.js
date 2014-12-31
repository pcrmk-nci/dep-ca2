module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/js/app.js',
      'app/js/modules/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
