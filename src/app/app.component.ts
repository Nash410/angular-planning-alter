import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(){
    const config = {
      apiKey: "AIzaSyAA-9XbgYNft6uYdMB71veOfebyuI6BNaA",
      authDomain: "planningalter-34ec0.firebaseapp.com",
      databaseURL: "https://planningalter-34ec0.firebaseio.com",
      projectId: "planningalter-34ec0",
      storageBucket: "planningalter-34ec0.appspot.com",
      messagingSenderId: "312869238770",
      appId: "1:312869238770:web:18879e5eee49de43049d6b"
    };
    firebase.initializeApp(config);
  }
}
