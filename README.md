# EventList

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) along with TypeScript. I decided to use React and TypeScript as:

1. The requirement for a single-page app and the obvious value of components for the repeated UI elements (particularly the event cards) seemed to be a good fit for React.
2. Having started to use TypeScript I am really seeing the benefits of Static Typing, namely:
   - Identifying potential bugs through type checking during compilation
   - Better documentation of the code
   - Integration with Visual Studio Code to improve Intellisense, Refactoring and Tooltips

## Testing

Integration tests are written using [Cypress](https://www.cypress.io/). I've found Cypress tests to be easy to write and helpful to my workflow, allowing me to write tests before my code and think about how the user will interact with the application.

Instructions on how to run the tests are included in the Available Scripts section below.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run cypress:open`

**Note**, this requires `yarn start` to be running in a different terminal window.

After this command is executed the Cypress test runner opens. Allowing you to run test files individually or all as a series.
