# Adopt-Me

A basic app to search for animal up for adoption across a couple of American cities

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You will need on your local machine...

* [Node & NPM](https://www.npmjs.com/get-npm).

### Installing

1. `cd` to your desired directory and run ...

```
git clone git@github.com:charlieShingleton/adopt-me.git
```

2. Cd into the newly cloned directory and install the required packages with

```
npm install
```

3. After installation is complete run the development server using the following command. Note that it can take up to 30s for the Parcel bundler to initialise.

```
npm run dev
```

### API Mocking

The project uses a node package provided by [Frontend Masters](https://github.com/FrontendMasters) for retrieving the pet data. If you do not wish to use the live version of that API, or it is unavailable, the pet response can be mocked by running the project with the following command:

```
npm run dev:mock
```

### Linting, Formatting and Testing

Various commands are supplied for ensuring the project exists in a formatted, coherent state. Linting and formatting commands are included by default, by no testing functionality is included currently. Run the following commands in the project root for the titled functionality:

#### Linting:
```
npm run lint
```

#### Formatting:
```
npm run format
```

#### Testing:
NB: Does nothing currently
```
npm run test
```

## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Reach Router](https://reach.tech/router/) - Project routing
* [Parcel](https://parceljs.org/) - The project bundler


## Authors
* **Brian Holt** - *Initial course and source code author* - [Brian Holt](https://github.com/btholt)
* **Charlie Shingleton** - *Course student and addition of Dockerfile config* - [CharlieShingleton](https://github.com/charlieShingleton)
