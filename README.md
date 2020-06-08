# Industrial Liaison Program Website
ILP Website has been created by Adel F. Del Valle and Christian E. Rosado Feliciano with the mentorship of Dr. José Meléndez.
The purpose of the website is to bring students, faculty and companies together to collaborate on developing cool things.  

Below, you will find everything you need to know about the project's structure and technology used to create it.  In the case that you are new to the project and are a replacement for Adel and/or Christian, you will need to read this document before getting your hand on the code.

## Before you start
The website is build using the MERN Stack which stands for (Mongo, Express, React.js, and Node.js). In the case that you don't know any of the following technologies or only one of them, you should complete the following steps.

## Technology
* [React.js](https://reactjs.org)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

### Steps on Learning the MERN Stack
It is highly recommended to build a small To-do List app with users in order to practice what you are learning.

1. Learn React.js
    * The official React.js [documentation](https://reactjs.org) has a really good tutorial and explains really well the main concepts.  
    * Understand how React Hooks works and why is it better than using Class Based Components.

2. Learn Redux
    * The best way to learn Redux is by watching to [this](https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) Youtube playlist that really explains how Redux works and what does everything mean.

3. Learn Node.js and Express.js
    * The best way to learn Node.js and Express.js is by watching to [this](https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp) Youtube playlist that really explains how they work together and what does everything mean.

4. Learn MongoDB and Mongoose.js
    * The best way to learn MongoDB and Mongoose is by watching to [this](https://www.youtube.com/watch?v=9OPP_1eAENg&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u) Youtube playlist that really explains how they work together and what does everything mean.


### Project Structure
```
ILP-WEBSITE
    /client 
    /config
    /models
    /node_modules
    /routes
    app.js
```

* `/client` Folder: Here you can find the React.js code.
* `/config` Folder: Here you can find the Mongo DB user key
* `/models` Folder: Here you can find the Mongoose Schemas
* `/node_modules` Folder: Node Modules, you really don't need to touch this :/
* `/routes` Folder: Here you can find the API routes.
* `app.js` file: Here you can find the server file.

### Client Folder
```
client
    /node_modules
    /public
    /src
        /components
            /constant
        /pages
    App.js
```

* `/node_modules` Folder: Node Modules, you really don't need to touch this :/
* `/public` Folder: Here you put all the images and logos.
* `/src` Folder: Here you will find the `components` and `pages` folders.
* `/components` Folder: Here you will find every reusable component.
* `/pages` Folder: Here you will find every page that has a path.
* `App.js` file: here you can find the parent component that will be rendered and the Routing.

## Running The Website
Before running the project, you must create a new branch from the master branch.  Then you will write the following in the terminal under the root folder.
```
$ yarn install
```
Then change to the `/client` folder and write the following on your terminal
```
$ yarn install
```

Since we're using the MERN Stack, we can run the server and client together or separately. 

To run the project together, write the following in the root folder.  **Warning: In the case you are using windows, concurrently might now work correctly.  In this scenario, open another terminal window and run the server and the client separately.**
```
$ yarn run dev
```
To run the server only, write the following in the root folder.
```
$ yarn run server
```
To run the client only, write the following in the client folder.
```
$ yarn start
```


