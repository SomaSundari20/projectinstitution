import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projectinstitution';
  constructor(public _auth: AuthService, public router: Router) { }

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDMymHYuQEWDsc3CbciG6tfGIpes7w_ECI",
      authDomain: "httpsignup-69c32.firebaseapp.com",
      databaseURL: "https://httpsignup-69c32-default-rtdb.firebaseio.com",
      projectId: "httpsignup-69c32",
      storageBucket: "httpsignup-69c32.appspot.com",
      messagingSenderId: "346615725380",
      appId: "1:346615725380:web:28a261a3568a2d06092b11"
    };

    const app = initializeApp(firebaseConfig)

  }

  onlogin() {
    this.router.navigate(['/login'])
  }

  toggle(nav: any) {
    if (nav.opened) {
      nav.close()
    }
    else {
      nav.open()
    }
  }
  onLogout() {
    this._auth.onLogout();
  }
}
