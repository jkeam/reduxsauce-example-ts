# Reduxsauce Example TS

This repo is created to illustrate how to use reduxsauce using Typescript.


## Prerequisuites
1.  Node v12+
2.  Yarn v1.22+
3.  Serve v11.x+ - Only needed for production serving. `yarn global add serve`


## Setup
```
# install deps
yarn

# start dev server
yarn start
```


## Production
```
yarn build
serve -s build -l 5000  # app is now running on port 5000, this port is the default port
```
