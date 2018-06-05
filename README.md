# Fresh Start

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Add styled-components, routing, storybook to the [create-react-app]() boilerplate.

## Tech Stack

| frontend          |             |
| ------------------|-------------|
| view library      | [react](https://reactjs.org/) |
| component library | [antd](https://ant.design/) |
| styling           | [styled-components ](https://github.com/styled-components/styled-components) |
| boilerplate       | [create-react-app](https://github.com/facebook/create-react-app)|
| documentation     | [storybook](https://github.com/storybooks/storybook) |

## Requirements


You will need the following software installed on your machine:

- [node](https://nodejs.org/en/)

We recomend installing **node** throught [nvm](https://github.com/creationix/nvm), as well as
updating [npm](https://www.npmjs.com/) to version >=5.

**NOTE**: this repo was only tested on **linux**.

## Getting started

First, clone this repository:

```sh
git clone ...
```

Navigate to the root of the project and install the dependencies:

```sh
cd refresh
npm i
```

Now, you can have a look at the boilerplate application:

```sh
npm run start
```

## Scripts


A set of scripts are provided for you to test, build and analyze the project.

### Test

You can run all tests in the project with the following command:

```sh
npm run test
```

You can also generate a website with information on the code coverage with:

```sh
npm run test -- --coverage
```

This will generate a website in the folder `coverage`. You can launch it with any server of your
choice, for example [serve](https://www.npmjs.com/package/serve).

```sh
npm i -g serve && serve coverage
```

### Build

You can build a production ready version of the website by running:

```sh
npm run build
```

This will create a build folder with the minimized and transpiled JS.

### Dependency map

You can generate a map of all dependencies, this can be very usefull when trying to identify a
library causing bloat to the application. After building your application you can generate a map,
by running:

```sh
npm run analyze
```

This will look into your `build` folder and open an interactive map of the dependencies in your
browser.
