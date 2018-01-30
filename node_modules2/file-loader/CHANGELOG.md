# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.6"></a>
## [1.1.6](https://github.com/webpack/file-loader/compare/v1.1.5...v1.1.6) (2017-12-16)


### Bug Fixes

* rootContext compatibility fix for legacy / v4 (#237) ([1e4b7cf](https://github.com/webpack/file-loader/commit/1e4b7cf)), closes [#237](https://github.com/webpack/file-loader/issues/237)



<a name="1.1.5"></a>
## [1.1.5](https://github.com/webpack/file-loader/compare/v1.1.4...v1.1.5) (2017-10-05)


### Bug Fixes

* **schema:** allow `name` to be a `{Function}` (`options.name`) ([#216](https://github.com/webpack/file-loader/issues/216)) ([fbfb160](https://github.com/webpack/file-loader/commit/fbfb160))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/webpack/file-loader/compare/v1.1.3...v1.1.4) (2017-09-30)


### Bug Fixes

* **index:** revert to CJS exports ([#212](https://github.com/webpack/file-loader/issues/212)) ([f412b3e](https://github.com/webpack/file-loader/commit/f412b3e))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/webpack/file-loader/compare/v1.1.2...v1.1.3) (2017-09-30)



<a name="1.1.2"></a>
## [1.1.2](https://github.com/webpack/file-loader/compare/v1.1.1...v1.1.2) (2017-09-30)


### Bug Fixes

* **cjs:** export `raw` value ([#183](https://github.com/webpack/file-loader/issues/183)) ([daeff0e](https://github.com/webpack/file-loader/commit/daeff0e))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/webpack/file-loader/compare/v1.1.0...v1.1.1) (2017-09-30)


### Bug Fixes

* **schema:** allow `additionalProperties` ([#207](https://github.com/webpack/file-loader/issues/207)) ([cf7c85a](https://github.com/webpack/file-loader/commit/cf7c85a))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/webpack/file-loader/compare/v1.0.0...v1.1.0) (2017-09-29)


### Features

* add `options` validation (`schema-utils`) ([#184](https://github.com/webpack/file-loader/issues/184)) ([696ca77](https://github.com/webpack/file-loader/commit/696ca77))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/webpack/file-loader/compare/v1.0.0-rc.0...v1.0.0) (2017-07-26)


### Bug Fixes

* remove `=` from default export (`SyntaxError`) ([#178](https://github.com/webpack/file-loader/issues/178)) ([3fe2d12](https://github.com/webpack/file-loader/commit/3fe2d12))


### Code Refactoring

* Upgrade to defaults 1.3.0 ([#170](https://github.com/webpack-contrib/file-loader/pull/170)) ([632ed72](https://github.com/webpack/file-loader/commit/acd6c2f))
* Apply webpack-defaults ([#167](https://github.com/webpack/file-loader/issues/167)) ([632ed72](https://github.com/webpack/file-loader/commit/632ed72))


### BREAKING CHANGES

* Enforces Webpack standard NodeJS engines range.
   at the time of merge `>= 4.3 < 5.0.0 || >= 5.10`.



<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/webpack/file-loader/compare/v1.0.0-beta.1...v1.0.0-rc.0) (2017-07-26)


### Bug Fixes

* remove `=` from default export (`SyntaxError`) ([#178](https://github.com/webpack/file-loader/issues/178)) ([3fe2d12](https://github.com/webpack/file-loader/commit/3fe2d12))



<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1](https://github.com/webpack/file-loader/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2017-06-09)

### Code Refactoring

* Upgrade to defaults 1.3.0 ([#170](https://github.com/webpack-contrib/file-loader/pull/170)) ([632ed72](https://github.com/webpack/file-loader/commit/acd6c2f))


<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/webpack/file-loader/compare/v0.11.2...v1.0.0-beta.0) (2017-06-07)


### Code Refactoring

* Apply webpack-defaults ([#167](https://github.com/webpack/file-loader/issues/167)) ([632ed72](https://github.com/webpack/file-loader/commit/632ed72))


### BREAKING CHANGES

* Enforces Webpack standard NodeJS engines range.
   at the time of merge `>= 4.3 < 5.0.0 || >= 5.10`.



<a name="0.11.2"></a>
## [0.11.2](https://github.com/webpack/file-loader/compare/v0.11.1...v0.11.2) (2017-06-05)


### Bug Fixes

* **index:** allow to override publicPath with an empty string ([#145](https://github.com/webpack/file-loader/issues/145)) ([26ab81a](https://github.com/webpack/file-loader/commit/26ab81a))
* init `publicPath` to undefined ([#159](https://github.com/webpack/file-loader/issues/159)) ([e4c0b2a](https://github.com/webpack/file-loader/commit/e4c0b2a))



<a name="0.11.1"></a>
## [0.11.1](https://github.com/webpack/file-loader/compare/v0.11.0...v0.11.1) (2017-04-01)


### Bug Fixes

* outputPath function overriden by useRelativePath ([#139](https://github.com/webpack/file-loader/issues/139)) ([80cdee2](https://github.com/webpack/file-loader/commit/80cdee2))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/webpack/file-loader/compare/v0.10.1...v0.11.0) (2017-03-31)


### Features

* Emit files with relative urls ([#135](https://github.com/webpack/file-loader/issues/135)) ([dbcd6cc](https://github.com/webpack/file-loader/commit/dbcd6cc))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/webpack/file-loader/compare/v0.10.0...v0.10.1) (2017-02-25)


### Bug Fixes

* **getOptions:** deprecation warn in loaderUtils ([#129](https://github.com/webpack/file-loader/issues/129)) ([a8358a0](https://github.com/webpack/file-loader/commit/a8358a0))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/webpack/file-loader/compare/v0.9.0...v0.10.0) (2017-01-28)


### Features

* **resources:** specify custom public file name ([6833c70](https://github.com/webpack/file-loader/commit/6833c70))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
