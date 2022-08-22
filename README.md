# badger-electron
electron version of badger

# To create this project

npx create-electron-app my-new-app --template=typescript
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom

# To build
npm build

# To run
npm start

# To add hot reload
npm install --save-dev electron-reloader

# Add to index.js/ts
require('electron-reloader')(module);

# To add mui
npm install @mui/material @emotion/react @emotion/styled

# To remove Cannot use JSX unless the '--jsx' flag is provided error
add "jsx": "react" to compiler options in tsconfig

# Add the following to tsconfig compiler options to enable es6 modules import
# https://bobbyhadz.com/blog/typescript-module-can-only-be-default-imported-esmoduleinterop#:~:text=The%20error%20%22Module%20can%20only,json%20file.

 "esModuleInterop": true


# To hide menu bar in index.ts to new BrowserWindow object
autoHideMenuBar: true

# To create a react ts project
npx create-react-app --template typescript
# To create react ts project in current directory
npx create-react-app . --template typescript

# To compile ts project
tsc public/file.ts

#####
# To change output directory of ts - add the following to CompilerOptions
"outDir": "public"

# Cannot find require error ts
npm i --save-dev @types/node

# Place ts files in src folder

# Add the following to tsconfig compileroptions
"types": [ "node" ],
"typeRoots": [ "../node_modules/@types" ]
 "include": [
    "src"
  ]

# To restart ts server

Ctrl+Shift+p Typescript: restart
######


# To fix isolated modules error
Typescript treats files without import/exports as legacy script files. As such files are not modules and any definitions they have get merged in the global namespace. isolatedModules forbids such files.

Adding any import or export to a file makes it a module and the error disappears.

Also export {} is a handy way to make a file a module without importing anything


# https://stackoverflow.com/questions/45661027/typescript-outdir-setting-in-tsconfig-json-not-working

# To specify a config file when compiling
tsc -p tsconfig.json 

# To specify outdir during compile of 1 ts file
tsc src/main.ts --outDir build/

# To setup a TS app
# https://www.digitalocean.com/community/tutorials/typescript-new-project
# https://stackoverflow.com/questions/36916989/how-can-i-generate-a-tsconfig-json-file

# In a empty folder
npm i typescript --save-dev
npx tsc --init

# set noemit false to outputin tsconfig
"noEmit": false

# To do npm run tsc instead of just tsc, add the following to scripts in package.json
"tsc": "tsc"

# Add the following to build both react and tsc when npm run build
"build": "react-scripts build && tsc"

# To compile ts, just do tsc

# To set starting point: Add the main entry that holds the path pointing to the main.js file, as shown below.

"main":"public/src/main.js",

# Add electron-dev as an entry holding the value electron . under the scripts section in the package.json file as shown below to run the react app on Electron.

"electron-dev": "electron ."

# https://bobbyhadz.com/blog/typescript-cannot-be-compiled-under-isolatedmodules#:~:text=The%20error%20%22Cannot%20be%20compiled,make%20it%20an%20ES%20module.

# 'main.ts' cannot be compiled under '--isolatedModules'
set isolatedModules to false in tsconfig

# To create this project
https://github.com/electron-react-boilerplate/electron-react-boilerplate

# To start
npm start


#### Notes ####
# You can create your package.json file
 npm init -y

