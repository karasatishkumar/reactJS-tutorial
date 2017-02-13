var USER_DATA = {
  name: 'Kara Satish Kumar',
  username: 'karasatishkumar',
  image: 'https://avatars2.githubusercontent.com/u/2779223?v=3&u=a529006aba5f6298367e375cc25a954497b1244f&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/router');


ReactDOM.render(
  routes, 
  document.getElementById('app')
);