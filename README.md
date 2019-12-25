## Available Scripts

In the project directory, you can run:

### `npm install`

Run npm install to install project dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## User Experience (UX)
   
   - The app is opening on the Customers View listing customers with all information.
 
   - when user click on customer row, a modal view will open with budget field pre-filled with value of selected customer.
   
   - if the updated budget value is not valid, a validation message displays to the customer with min amount of budget needed.
   
   - if the updated budget value is valid, a confirmation modal is displayed to the user, if he confirmed, the value of the budget will be updated and reflected in the customers list view.
  

## Code Style and quality

ESlint and Prettier are used to force a specific style rules 


## Test Coverage

As required in the task, I wrote test cases for modal component


## Project Dockerization

I created a Docker configuration file that can be used in dev mode to create an image of the project and run the project thought docker.


Thanks a lot :) 







