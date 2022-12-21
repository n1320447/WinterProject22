# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# WinterProject22

Webapplication to provide crowdsourced information about a coffeeshop's current capacity. 


Issue this will solve: 

Google maps provides current capacity based on number of phones currently in a coffeshop. Sometimes those people are just in line to by coffee and they'll leave quickly. Other times, google will mark coffee shop as empty but all tables are taken by 1 or 2 people, appearing to google that the coffee shop is empty. With our application we will provide more accurate information provided by actual people. 

Features:
1. Will save from driving to coffeshop to find it is full.
2. Simple to use.
3. Provide accurate information when data is freshly input.
4. Receive points that a user can save for coffee.
5. Incentive to providing data will be that after certain points a user can receive enough to convert to a coffee.


Example Use Case:
1. User enters a coffeeshop.
2. User gets ping from the application to provide how many free tables are available.
3. User inputs information for specific coffee shop.
4. User receives points.


Potential technlogies used:
1. Front End:
    - HTML/CSS (Bootstrap)
        - Create webpages
    - JavaScript
2. Back End:
    - RestAPI
        - Interface for data saved in database
        - Build API to allow secure access to data saved in DataBase
    - SQL (e.g.: PostgresSQL, SQLite)
        - Create/store user profiles
        - Store data of each coffee shop
        - Store points
        - Allow creation of new coffee shops
    - Amazon Web Services (for Hosting Servers)
        - Use free hosting service

Other misc. info:
- 
![First Diagram 2 0](https://user-images.githubusercontent.com/68760828/208498726-0e1106fb-b746-403c-9685-f4da8df2ca23.jpg)



