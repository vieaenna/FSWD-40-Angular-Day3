import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
      apiKey: "AIzaSyDKC-hOHXaSVFUp3xXR0VVsbpnV9qqSwjs",
      authDomain: "foodapp-a2388.firebaseapp.com",
      databaseURL: "https://foodapp-a2388.firebaseio.com",
      projectId: "foodapp-a2388",
      storageBucket: "",
      messagingSenderId: "1035118245464"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
