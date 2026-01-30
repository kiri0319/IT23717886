const config = {
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [['html'], ['./custom-reporter.js']],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000
  }
};

module.exports = config;
