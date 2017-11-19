const express = require('express')
const app = express()
var request = require('request');
var OAuth = require('oauth');

app.use(express.static('public')) //server out the public files statically!

app.get('/twitter',function(req,res){

  var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'pwLneyUx9ow1o1mCnHZckUPOO',
  'q4SelAXJF1PbNIexTFrWpCfo0IXyIXLb3wdQRTshfAxtSD31Qb',
  '1.0A',
  null,
  'HMAC-SHA1'
  );

  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=hasanthehun&count=200',


    '905985786964623361-0eAnC8B8IaN3Lfc1qqpemWYskS6tohl', //test user token
    'rVp0eeeb7lqD4yPt75st9rR7ErLg3PRA2H0xkTEl35RLs', //test user secret
    function (e, data, response){
      // if (e) console.error(e);
      console.log( JSON.parse(data) );

      res.send(JSON.parse(data))

    });
})

app.listen(3000, function(){
  console.log("running on 3k")
})
