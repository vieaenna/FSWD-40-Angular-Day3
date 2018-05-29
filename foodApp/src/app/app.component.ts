import { Component } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FirebaseService } from './services/firebase.services';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  foodapps: Foodapp[]; 
  categories: Category[];
  appState: string;
  activeKey: string;
  constructor(private _firebaseService: FirebaseService) {

  };

  ngOnInit() {

    this._firebaseService.getFoodapp().subscribe(foodapp => {
 
      this.foodapps = foodapp;
 
    });
 
    this._firebaseService.getCategories().subscribe(categories => {
 
      this.categories = categories;
 
    });
 
  }  
changeState(state, key = null) {

  if(key) {

    this.activeKey = key;

  }

  this.appState = state;


  }
}

 interface Foodapp {
  $key?: string;
  name: string; 
  vitamin: string;
  category: string;
}
 interface Category {
  $key?: string;
  category?: string;
}
 