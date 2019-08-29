import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

//import {GoogleMapsComponent} from '../app/google-maps/google-maps.component';

const  firebaseConfig = {
  apiKey: "AIzaSyDMdwG5kkZk_yEOlkeNLP2Zka4yVTVP-4w",
  authDomain: "iondb-2fe59.firebaseapp.com",
  databaseURL: "https://iondb-2fe59.firebaseio.com",
  projectId: "iondb-2fe59",
  storageBucket: "",
  messagingSenderId: "998233606199",
  appId: "1:998233606199:web:3e244438fc20cc80"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, AngularFireDatabaseModule,HttpModule
  ],
  providers: [
    SQLite,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
