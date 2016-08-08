# dashlight [![Build Status](https://img.shields.io/travis/niteshpatel/dashlight.svg)](https://travis-ci.org/niteshpatel/dashlight) [![Code Climate](https://img.shields.io/codeclimate/github/niteshpatel/dashlight.svg?maxAge=2592000)](https://codeclimate.com/github/niteshpatel/dashlight) [![Coverage](https://img.shields.io/codeclimate/coverage/github/niteshpatel/dashlight.svg?maxAge=2592000)](https://codeclimate.com/github/niteshpatel/dashlight/coverage) [![License](https://img.shields.io/github/license/niteshpatel/dashlight.svg?maxAge=2592000)](https://raw.githubusercontent.com/niteshpatel/dashlight/master/LICENSE.txt)

JavaScript-only status dashboard providing display widgets out-of-the-box.   

## Branch notes

This branch has been taken at the point where this repository represents an extremely thin slice of application with the full automated build, test, code analysis, and deploy pipeline in place

Specifically:
- Hello world display
- Unit tested using Jasmine framework and Karma test runner
- Test coverage reporting using Karma test runner (uses Istanbul under the hood)
- Travis-ci integration
- Code climate code quality analysis and test coverage reports (reported by Karma)
- Automatic deployment of static files to surge.sh
- Slack integration for Github commits, Travis builds, and Code Climate issues
