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
* `heroku logs --tail`

# Go go New Relic

* `npm install newrelic --save`
* `cp node_modules/newrelic/newrelic.js .`
* Edit newrelic.js to set app name and to pull license key from environment: `process.env.NEW_RELIC_LICENSE_KEY`
* Set the license key: `heroku config:set NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY_HERE`
* Edit the app.js to add `require newrelic` at the top
* Test:
    * `NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY_HERE heroku local web`
* Push to Heroku:
    * `git push heroku master && heroku logs --tail`

# Usage

* `npm install`

And then:

    NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY_HERE npm start

Or:

    NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY_HERE heroku local web

