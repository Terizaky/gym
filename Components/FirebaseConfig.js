import firebase from '@firebase/app';
  var config = {
    apiKey: "AIzaSyBAfwf6PBVusngNqsB3MvqHUKxeS3F_904",
    authDomain: "reactnativegym-bd643.firebaseapp.com",
    databaseURL: "https://reactnativegym-bd643.firebaseio.com",
    projectId: "reactnativegym-bd643",
    storageBucket: "reactnativegym-bd643.appspot.com",
    messagingSenderId: "936947657057"
  };
  export const firebaseApp = firebase.initializeApp(config);
