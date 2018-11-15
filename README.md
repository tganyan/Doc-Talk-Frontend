# Doc-Talk

## Overview

### Current version

1.2

### Description
- Doc-Talk is an app that's been created to allow users to possibly self-diagnosis their own condition. Our site is easy to use, we do require 
you to make an account. Once logged in, fill out our simple form which includes your possible symptoms, age and gender.
Once submitted, your possible conditions will populate on our site.
- We are using [**ApiMedic**](https://apimedic.com/) which is a 'medical symptom checker' specifically for patients.


### Disclaimer
_If you are suffering from anything that seems major PLEASE go to the hospital/ER. Receiving a proper medical diagnosis 
can only be done by a medical professional. Our site should only be used to help you get a possible general idea of what you may have._



##### Send requests from any locally connected computer

- To create an account, send a POST request with a username, password, email.
- Here's an example of a request for a user signing up:
`Processing a POST request on /api/signup
REQUEST BODY { username: '<username>', email: '<useremail>', password: '<userpassword>' }
info: Responding with a 200 status code and a token`


- To login to an account, send a GET request with a username, password:
 `info: Processing a GET request on /api/login
   info: responding with 200 status code and a token`

## Testing

### Testing Framework: jest


## Built With

Please see package.json to confirm dependency details

## Contributing

Please feel free to contribute. Master branch auto merge locked for approval for non-contributors.

## Local Machine 

* Clone repo,run -npm install
* Run server, -npm run start  
* Open localhost, - npm run watch
 
## Planned Enhancements 

In upcoming releases we plan to:

* Create a chat-room with socket-io, these chat-rooms will allow you to speak privately to a live doctor on the spot.
* We also will be creating a common chat-room that clients can join. Ask questions, make suggestions etc. 
* We also will be allowing users to save/favorite articles.


## Authors

![CF](http://i.imgur.com/7v5ASc8.png) [**Brai Frauen**](https://github.com/ashabrai), [**Jason Hiskey**](https://github.com/jlhiskey), [**Kristian Esvelt**](https://github.com/kris3579), [**Tyler Anyan**](https://github.com/tganyan)

## License

MIT
