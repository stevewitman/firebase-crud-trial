import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemService } from './items/shared/item.service';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCXMCgH5YhSYG9EMz-7H3gZAEGFbv3hH4U",
  authDomain: "angular-firebase-trial.firebaseapp.com",
  databaseURL: "https://angular-firebase-trial.firebaseio.com",
  projectId: "angular-firebase-trial",
  storageBucket: "angular-firebase-trial.appspot.com",
  messagingSenderId: "477348527315"
};

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
