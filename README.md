# Table of contents

- [Table of contents](#table-of-contents)
- [About the project](#about-the-project)
- [Getting Started](#getting-started)
  - [Starting the project](#starting-the-project)
  - [Running the tests](#running-the-tests)
- [Architectural Decisions](#architectural-decisions)
  - [Reusable Range Component](#reusable-range-component)
  - [Adapter Pattern for Data Fetching](#adapter-pattern-for-data-fetching)
  - [Separation of Concerns with Pure Functions](#separation-of-concerns-with-pure-functions)
- [Things to improve](#things-to-improve)

---

# About the project

This repository contains a technical test project built with Next.js, manually configured from scratch. The application is deployed and accessible at [https://mango-test-m6ew.vercel.app/](https://mango-test-m6ew.vercel.app/).

The project follows best practices in software architecture, emphasizing reusability, testability, and maintainability.

---

# Getting Started

## Starting the project

If needed, you can start the project locally following the steps below:

_Remember that the project is deployed to [https://mango-test-m6ew.vercel.app/](https://mango-test-m6ew.vercel.app/)._

1. Install the dependencies running the following command:

```bash
npm install
```

2. Start the project running the following command:

```bash
npm run dev
```

## Running the tests

To run the tests, execute the following command:

```bash
npm test
```

To collect code coverage while running tests:

```bash
npm run test-coverage
```

# Architectural Decisions

I've made some architectural decisions to improve the project's maintainability and testability. Below are some of the most relevant decisions:

## Reusable Range Component

The Range component is designed as a reusable component, similar to component libraries ones like MaterialUI or Ant-design. It adapts its behaviour based on the props it receives. Depending on the provided props, it can render:

- A min-max Range component.
- A fixed-values Range component.

This abstraction allows developers to use the component without worrying about its internal implementation. This design improves:

- **Reusability**: The component can be used across the application.
- **Testability**: The abstraction simplifies testing by focusing on input props and expected output.
- **Developer experience**: The component is easy to use and understand, as it's designed to be used without worrying about the implementation.

## Adapter Pattern for Data Fetching

To handle data fetching, the repository employs the Adapter Pattern via a custom React hook. This pattern ensures a clear separation of concerns following the Single Responsibility principle:

- Component Responsibility: The component only renders the data it receives.
- Hook Responsibility: The hook handles fetching and adapting the data to the component's needs.

The benefits of using this pattern are:

- Single Responsibility Principle: Each layer has a distinct role.
- Improved maintainability: If the API structure changes, only the hook needs to be updated, leaving components and tests untouched.
- Improved testability: Having this separation allows for easier testing of the component, as it's much simpler to mock the return of the hook, making us able to test loading and error states easily. Also it simplifies the test code, as it's not necessary to mock the API call in every test.

## Separation of Concerns with Pure Functions

Complex processes and logic blocks are extracted into pure functions. This approach:

- Enhances testability: We can easily make unit test for that functions as they're pure and isolated.
- Improves readability by providing semantic to complex operations.
- Allows us to reuse logic across the project if needed.

# Things to improve

If I had more time, I would like to work on the following tasks in order of priority:

1. Test drag and drop from Range components
2. Improve FixedRange drag and drop experience
3. Test the 2 pages for loading and error states
4. Test the two adapter hooks
5. Remove useClient from my pages
6. Fix thumb styles when dragging and moving mouse outside thumb
