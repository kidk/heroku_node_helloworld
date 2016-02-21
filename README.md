# heroku_node_helloworld
Testing Heroku + Node + New Relic

# Creation

* Create the repository on github with Node .gitignore and clone locally
* `npm init`
* `npm install express --save` (from http://expressjs.com/en/starter/installing.html)
* Paste helloworld app from http://expressjs.com/en/starter/hello-world.html into app.js
* Set the port based on environment as per https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku
* Add the Node version to your package.json:
    * Which version am I on? `node --version`
    * Paste the stanza from https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version

# Go go Heroku app

* Copy the Procfile into place containing: `web: node app.js`
* `heroku local web` (from https://devcenter.heroku.com/articles/deploying-nodejs)
* `heroku login`
* `heroku create`
* `git push heroku master`
* `heroku ps:scale web=1`

# Usage

* `npm install`
* `NR_LICENSE_KEY=YOUR_KEY_HERE npm start`
