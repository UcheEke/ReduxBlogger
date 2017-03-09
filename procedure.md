# Steps to create a redux/react app from scratch

## 1. Set up basic environment:
    - mkdir 'appName'
    - Initialise npm within new app directory: npm init
    - Create a .babelrc file containing the babel presets configuration: e.g. "es2015"
    - Create a 'config' folder containing application configuration files e.g. webpack.config.js
    - In this folder create the webpack configuration file: touch webpack.config.js
    - Create a 'src' directory which will contain all source files for react and redux: mkdir src
    - Within this folder, create an entry point for React JSX files: e.g. index.js (or .jsx)
    - Create a style folder to hold any bespoke CSS files
    
## 2. Set up your basic markup in dist/index.html:

    <!DOCTYPE 'html'>
    <html>
        <head>
            <meta charset='utf-8' />
        </head>
        <body>
          <!-- React App Root -->
          <div id="app"></div>
          
          <!-- Webpack bundle file -->
          <script src="bundle.js"></script>
        </body>  
    </html>  
    
## 3. Add a start point to your index.js file to check that everything is working correctly:

    console.log('Hello World!');
    
## 4. Install Webpack and Babel

    npm install --save-dev webpack webpack-dev-server
    npm install --save-dev babel-core babel-loader
    
    (Configuration is for webpack v2.*)
    
## 5. Configure your webpack.config.js file:

    const path = require('path');
    let webpack = require('webpack');
    
    module.exports = {
        entry: 'index.js',
        output: {
            path: path.resolve('dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js','.jsx'],
            modules: ['src', 'node_modules'],
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        devServer: {
            contentBase: './'
        }
    };


## 6. Edit your .babelrc file accordingly

    {
        "presets" : [
            "es2015", "react"    
        ]
    }
    
    ( The babel loader will then know how to transpile your js/jsx files!)

## 7. Install React and Redux

    npm install --save react react-dom react-redux
    npm install --save redux
    
## 8. Optional packages
    
   #### Middleware to handle promises:
    npm install --save redux-promise  
    
   #### Handy toolbox for common array operations
    npm install --save lodash
     
   #### Routing middleware
    npm install --save react-router
     
   #### Minimalist AJAX call handler 
    npm install --save axios
    

