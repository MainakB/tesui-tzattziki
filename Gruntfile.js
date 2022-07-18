"use strict";

const fs = require("fs");
const path = require("path");
const { Tzatziki } = require("@kaniamb/tzatziki-core");
const { Tzatziki_Bl } = require("@kaniamb/tzatziki-bl");

module.exports = function (grunt) {
  require("jit-grunt")(grunt, {
    shell: "grunt-shell-spawn",
    continue: "grunt-continue",
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    shell: shellConfig(grunt),
  });

  grunt.registerTask("pretest", [
    "shell:compile",
    "task:setupConfigs",
    // "shell:compile",
    // "task_setUp:updateProxyForRallyIntegration",
    // "task_setUp:updateTestHelper",
    // "task_setUp:updateTableauIntegrationParams",
    // "task_setUp:setParallelExecutionCount",
    // "task_setUp:setEnvVariableTestModules",
    // "task_setUp:setEnvVariableBrowser",
    // "task_setUp:setEnvVariableChromeEdgeDriver",
    // "task_setUp:isWebDriverManagerUpdateRequired",
    // "task_webdriverManager:update",
    // "shell:start_webdriver",
    // "task_setUp:setNetThrottle",
  ]);

  grunt.registerTask("test", [
    "pretest",
    "continue:on",
    "task:startTest",
    "shell:clean_build",
    "continue:fail-on-warning",
    // "task_merge_jsons",
    // // 'concat',
    // "task_merge_logs",
    // "shell:clean_build",
    // "task_rallyIntegration",
    // "continue:fail-on-warning",
  ]);

  grunt.registerTask("task:setupConfigs", "Run tests", function () {
    try {
      var done = this.async();
      return Tzatziki.TestRunner.initConfigs({
        gruntobj: { ...grunt },
      }).then(
        () => {
          Tzatziki_Bl.init();
          grunt.log.ok("Test runner config setup complete!");
          return done(true);
        },
        function (error) {
          grunt.log.error(`Test runner config setup failed: ${error.message}`);
          return done(false);
        }
      );
    } catch (err) {
      throw err;
      grunt.verbose.or.write("Doing something").error().error(err.message);
    }
  });

  grunt.registerTask("task:startTest", "Start test run", function () {
    try {
      var done = this.async();
      console.log(`Tset run startxs`);
      return Tzatziki.TestRunner.runTest().then(
        function (code) {
          console.log(`Tset run done`);
          grunt.log.debug(`wdio testrunner finished with exit code ${code}`);
          return done(code === 0);
        },
        function (error) {
          grunt.log.error(`Something went wrong: ${e}`);
          return done(false);
        }
      );
    } catch (err) {
      grunt.verbose.or.write("Doing something").error().error(err.message);
    }
  });
};

function shellConfig(grunt) {
  return {
    options: {
      stdout: true,
      stderr: true,
      failOnError: true,
    },
    compile: {
      command: "npm run compile",
    },
    clean_build: {
      command: "npm run clean:build",
    },
  };
}
