import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from "angularfire2/firestore";

import {ItemService} from "./services/item.service";


import { AppComponent } from './app.component';
import { ItemsComponent } from './component/items/items.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddItemComponent } from './component/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestore-crud'),
    AngularFirestoreModule

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
