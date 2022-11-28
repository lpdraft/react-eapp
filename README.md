# Reat Basic Scarf-Ecommerce-App

This project was build by CRA [Create React App] in combination of other technology such as Bootstrap for visual pattern.

## How you can get access to the app

To run the app, you can either download the repository or clone it. Once you have done that part, please, run the next command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## How the project is structured? The project is divided into two parts:

- First layer consits of the Login Module.
- In the second layer, we have the module of our ecommerce app itself.

So, we will not be able to access the app if we have not logged in, since it is the first view that we will see. If we have an account and we log in correctly, then we will have access to the private route and be able to browse the whole app. 

## Project features
Since we are talking about the react app, let me mention that, in this project we will encounter with few custom react hooks an third party libraries. 

- The module of Login is handled by useContext in combination of useReducer to deal with user logging session. 
- Cart Items and storage of products are handeled with localStorage in combination with useContext. 
- We do also have some custom methods for currency format, to search users by id/name, etc in our DB, so that we don't have to repeat the same process of seeking resouces again and again. 

## Get in touch

- [@lpdraft](https://github.com/lpdraft)

