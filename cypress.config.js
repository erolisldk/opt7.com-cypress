const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  )
  return config
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "otwa2r",
  e2e: {
    baseUrl: "http://optimum7.com",
    defaultCommandTimeout: 5000,
    specPattern: "./features/**/*.feature",
    screenshotsFolder: "./cypress/results/screenshots",
    videosFolder: "./cypress/results/videos",
    excludeSpecPattern: "*!spec.js",
    trashAssetsBeforeRuns: true,
    watchForFileChanges: false,
    supportFile: "./cypress/support/*.js",
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
  },
  env: {
    mockUser: "airport-v8@pointr.tech",
    mockPwd: "P01ntr102*",
    grantType: "password",
  },
})
