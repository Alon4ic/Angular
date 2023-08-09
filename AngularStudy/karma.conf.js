/* eslint-disable no-undef */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

export default function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      import('karma-jasmine'),
      import('karma-chrome-launcher'),
      import('karma-jasmine-html-reporter'),
      import('karma-coverage'),
      import('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageIstanbulReporter: {
      dir: import('path').join(__dirname, './coverage/Angular-Stady'),
      reporters: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSoursePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
}
