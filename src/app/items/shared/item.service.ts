import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2";
import { Item } from './item'

@Injectable()
export class ItemService {

  private basePath: string = '/items';

  items: FirebaseListObservable<any[]>;

  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire, private db: AngularFireDatabase) { }

  getItemsList(query={}): FirebaseListObservable<any[]> {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    return this.items
  }

  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<any[]> {
    const itemPath =  `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath)
    return this.item
  } 

  createItem(item: Item): void  {
    this.items.push(item)
      .catch(error => this.handleError(error))
  }
  // Update an existing item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(key: string): void {
      this.items.remove(key)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.items.remove()
        .catch(error => this.handleError(error))
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }

}
