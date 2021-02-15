# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

////////////////
Priority is creating the grid and randomizing land value with a cap per value IE there can only be 2x 2 value tiles max. 
Unit cards value will be passed between objects, with a rendered sprite, by clicking - as with land values there is a cap on each item 


1)
Each tile is an object which can hold attributes, they will include the following:
land move value (integer 2-11) (this is hidden on game start)

2)
Each unit could be an object or just held in state? upon playing the unit, a counter will increment up till the max allowed value then refuse from an if statement (?) - unit cards could also be an attribute of the tile.. 

3)
cards will work much the same as units once I work out how that is

4)
player will click to select a tile then click elsewhere to complete an action (onClick = select )

