import { Parse } from 'parse';
import React from 'react';
import Router from 'react-router';
import routes from './config/routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import sumoApp from './config/reducers';

// PARSE + FACEBOOK
Parse.initialize("wtEyJHnw6hNNeGRoouah8lcl61SXmb1RCPVONMoo", "Ssf5tOt7i3BshKQMBTEU16NABSKlpgCmFdYCFN8Z");

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({ // this line replaces FB.init({
    appId      : '1705636706326152', // Facebook App ID
    status     : true,  // check Facebook Login status
    cookie     : true,  // enable cookies to allow Parse to access the session
    xfbml      : true,  // initialize Facebook social plugins on the page
    version    : 'v2.3' // point to the latest Facebook Graph API version
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

let store = createStore(sumoApp);

// KICK OFF ROUTER
Router.run(routes, Router.HistoryLocation, (Handler, routerState) => { // note "routerState" here
  React.render(
    <Provider store={store}>
      {() => <Handler routerState={routerState} />}
    </Provider>,
    document.body
  );
});
