// Generated by CoffeeScript 1.9.1
(function() {
  exports.config = {
    allScriptsTimeout: 99999,
    multiCapabilities: [
      {
        'browserName': 'firefox'
      }, {
        'browserName': 'chrome'
      }
    ],
    baseUrl: 'http://localhost:9001/',
    framework: 'jasmine',
    onPrepare: function() {
      return global.findBy = protractor.By;
    },
    specs: ['test/e2e/**/*.coffee'],
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      isVerbose: true,
      includeStackTrace: true
    }
  };

}).call(this);
