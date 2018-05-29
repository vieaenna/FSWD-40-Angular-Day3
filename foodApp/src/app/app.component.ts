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
  triggered: number;
  constructor(private _firebaseService: FirebaseService) {
   this.triggered=0;
  };

  ngOnInit() {
    this.appState='default';
    this._firebaseService.getFoodapp().subscribe(foodapp => {
 
      this.foodapps = foodapp;
 
    });
 
    this._firebaseService.getCategories().subscribe(categories => {
 
      this.categories = categories;
 
    });
 
  }
filterCategory(category) {
  this._firebaseService.getFoodApps(category).subscribe(foodapp=> {
    this.foodapps = foodapp;
  });
  var filtered=[],e=this.foodapps;
  //alert(category);
  e.map(function(x){if(x.category==category){filtered.push(x)}});
  //alert(JSON.stringify(filtered));
  this.foodapps=JSON.parse(JSON.stringify(e));
  ++this.triggered;
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
 