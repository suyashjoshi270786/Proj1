module.exports = {
  default: {
    // 👇 EXACT location of your feature files
    paths: ['MainTest/tests/features/**/*.feature'],

    requireModule: ['ts-node/register'],
    require: [
      // 👇 step definitions folder
      'MainTest/tests/steps/**/*.ts',
      // 👇 support files
      'MainTest/support/hooks.ts',
      'MainTest/support/world.ts'
    ],
    format: [
      'progress',
      'json:./reports/cucumber-report.json'
    ],
    publishQuiet: true
  }
};
