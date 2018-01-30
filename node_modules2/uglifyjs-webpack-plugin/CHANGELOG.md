# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.6"></a>
## [1.1.6](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.5...v1.1.6) (2018-01-05)


### Bug Fixes

* **index:** don't pass `compilation` as an argument to `UglifyJsPlugin.buildError` ([#201](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/201)) ([339ca10](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/339ca10))


### Reverts

* **package:** use exact `uglify-es` version (`dependencies`) ([#199](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/199)) ([#202](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/202)) ([426bafd](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/426bafd))



<a name="1.1.5"></a>
## [1.1.5](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.4...v1.1.5) (2017-12-27)


### Bug Fixes

* **package:** use exact `uglify-es` version (`dependencies`) ([#199](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/199)) ([2e2ed36](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/2e2ed36))



<a name="1.1.4"></a>
## [1.1.4](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.3...v1.1.4) (2017-12-14)


### Chores

* update `uglify-es` v3.2.0...v3.2.1 ([#190](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/190)) ([b356f74](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/b356f74))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.2...v1.1.3) (2017-12-14)


### Refactoring

* use `serialize-javascript` package instead own implementatin ([#183](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/183)) ([8d7ebcd](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/8d7ebcd))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.1...v1.1.2) (2017-11-30)


### Chores

* update `uglify-es` v3.1.3...3.2.0 ([#176](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/176)) ([3be7f62](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/3be7f62))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.1.0...v1.1.1) (2017-11-23)


### Bug Fixes

* comments behavior (`options.uglifyOptions.comments/options.extractComments`) ([#174](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/174)) ([321c9f6](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/321c9f6))
* **index:** ensure to nullify `inputSourceMap` if `sourcemap` is unavailable (`devtool`) ([#169](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/169)) ([062ec72](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/062ec72))
* **index:** set `maxConcurrentCallsPerWorker` to 1 (`options.parallel`) ([#173](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/173)) ([07c57c1](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/07c57c1))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.1...v1.1.0) (2017-11-19)


### Bug Fixes

* **index:** `exclude` is ignored (`options.exclude`)  ([#164](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/164)) ([ad17690](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/ad17690))
* pass of `{Boolean|Function}` parameters being ignored (`options.extractComments`) ([#168](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/168)) ([2c06f46](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/2c06f46))


### Features

* `include` option ([#167](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/167)) ([bbe0ef5](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/bbe0ef5))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0...v1.0.1) (2017-10-24)


### Bug Fixes

* **minify:** `nameCache` assignment (`uglifyOptions.nameCache`) ([#147](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/147)) ([af11e8e](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/af11e8e))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0-rc.0...v1.0.0) (2017-10-23)


### Features

* update to `uglify-es` ([#63](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/63)) ([1d62560](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/1d62560))

* add support for `parallelization` && `caching` (`options.parallel`) ([#77](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/77)) ([ee16639](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/ee16639))
* **index:** add `options` validation (`schema-utils`) ([#80](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/80)) ([f19b2de](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/f19b2de))


### Bug Fixes

* **deps:** cacache@10 with ISC licence ([#145](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/145)) ([9331034](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/9331034))
* typo "filterd" -> "filtered" ([#37](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/37)) ([238c373](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/238c373))
* **package:** mv uglify2 to `dependencies` && update `peerDependencies` ([#45](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/45)) ([93b0cd2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/93b0cd2))
* **uglify:** use Compress API not ast.transform ([990f2e2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/990f2e2))


### Code Refactoring

* apply `webpack-defaults` ([#35](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/35)) ([f6c5aa9](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/f6c5aa9))


### BREAKING CHANGES

* Enforces `peerDependencies` of `"webpack": ">= 3.0.0-rc.0 || ^3.0.0"`.
* Enforces `engines` of `"node": ">=4.3.0 < 5.0.0 || >= 5.10`



<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0-beta.2...v1.0.0-rc.0) (2017-10-23)



<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2017-09-29)



<a name="1.0.0-beta.2"></a>
# [1.0.0-beta.2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2017-07-21)


### Features

* add support for `parallelization` && `caching` (`options.parallel`) ([#77](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/77)) ([ee16639](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/ee16639))
* **index:** add `options` validation (`schema-utils`) ([#80](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/80)) ([f19b2de](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/f19b2de))



<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2017-07-06)


### Features

* update to `uglify-es` ([#63](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/63)) ([1d62560](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/1d62560))



<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v0.1.4...v1.0.0-beta.0) (2017-06-29)


### Bug Fixes

* typo "filterd" -> "filtered" ([#37](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/37)) ([238c373](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/238c373))
* **package:** mv uglify2 to `dependencies` && update `peerDependencies` ([#45](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/45)) ([93b0cd2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/93b0cd2))
* **uglify:** use Compress API not ast.transform ([990f2e2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/990f2e2))


### Code Refactoring

* apply `webpack-defaults` ([#35](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/35)) ([f6c5aa9](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/f6c5aa9))


### BREAKING CHANGES

* Enforces `peerDependencies` of `"webpack": ">= 3.0.0-rc.0 || ^3.0.0"`.
* Enforces `engines` of `"node": ">=4.3.0 < 5.0.0 || >= 5.10`



<a name="0.4.6"></a>
## [0.4.6](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/compare/v0.1.4...v0.4.6) (2017-06-29)


### Bug Fixes

* typo "filterd" -> "filtered" ([#37](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/37)) ([238c373](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/238c373))
* **package:** mv uglify2 to `dependencies` && update `peerDependencies` ([#45](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/45)) ([93b0cd2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/93b0cd2))
* **uglify:** use Compress API not ast.transform ([990f2e2](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/commit/990f2e2))
