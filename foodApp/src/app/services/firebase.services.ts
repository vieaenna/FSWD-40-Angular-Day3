
import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  foodapp: FirebaseListObservable<Foodapp[]>;
  categories: FirebaseListObservable<Category[]>;
  constructor(private af: AngularFireDatabase) {
    
  }
  getFoodapp() {
      this.foodapp= this.af.list('/foodapp') as FirebaseListObservable<Foodapp[]>;
      return this.foodapp;
  }
  getCategories() {
      this.categories= this.af.list('/categories') as FirebaseListObservable<Category[]>;
      return this.categories ;
  }

  getFoodApps(category: string = null) {
      if (category != null) {
          this.foodapp = this.af.list('/foodapp', {
              query: {
                  orderByChild: 'category',
                  equalTo: category
              }
          }) as FirebaseListObservable<Foodapp[]>;
      } else {
          this.foodapp= this.af.list('/foodapp') as FirebaseListObservable<Foodapp[]>;
      }
      return this.foodapp;
  }


}
export interface Foodapp {
  $key?: string;
  name: string; 
  vitamin: string;
  category: string;
}
export interface Category {
  $key?: string;
  category?: string;
}