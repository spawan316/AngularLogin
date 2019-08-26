import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';
import {of as observableOf} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  uid = this.afAuth.authState.pipe(
      map(authState=>{
       if(! authState){
         return false;
        }else{
          return authState.uid;
        }
      }),
    );
  isAdmin= observableOf(true);

  login() {
    console.log('Redirecting to google login provider');
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  Logout() {
    this.afAuth.auth.signOut();
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }
}
