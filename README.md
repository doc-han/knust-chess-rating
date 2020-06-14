# KNUST CHESS CLUB PLATFORM
A simple platform for the KNUST CHESS CLUB

## How to install
1. clone repo
2. cd into repo
3. creat a file .env in the directory and paste the below in the file
```txt
teamId = knust-chess-club
DBURI = mongodb://knust:knust123@ds161764.mlab.com:61764/knust-chess
```
4. install all modules(you should have [node](https://nodejs.org/en/download/) installed globally)
```bash
    npm install
```
5. run the start script
```bash
    npm start
```
6. For hot-reload. You need to have nodemon installed
```bash
    npm install -g nodemon
```
7. run the dev script instead
```bash
    npm run dev
```

## Submitting changes to code.
Fork the repo and make your changes on a different branch and make a pull request. 
All pull requests from master branch won't be merged!