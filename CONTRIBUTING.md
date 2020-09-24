# Vuesax Contributing Guide

Hello! I am very excited that you are interested in contributing with Vuesax. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Code of Conduct](https://github.com/lusaxweb/vuesax/blob/master/CODE_OF_CONDUCT.md)
- [Extraction request guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Pull Request Guidelines

- The `master` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches.
- Work in the **src** folder and DO NOT register distlos commits.
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion topic and green it before working on it.
  
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.
  
## Development Setup

- You will need Node.js version 6+.
- You will need [Vuepress](https://vuepress.vuejs.org/) installed globally.

After cloning the repository, execute:

```
npm install
```

### Commonly used NPM scripts

```bash
# Start the test server and the documentation

npm run dev
```
