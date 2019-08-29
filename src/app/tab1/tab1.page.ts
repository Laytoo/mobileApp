import { Component, ViewChild } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import{Http} from '@angular/http';
import {filter, switchMap } from 'rxjs/operators';


import { map } from 'rxjs/operators';
//import { HttpClient } from '@angular/common/http';

import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

declare let google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild("map",{static:true}) mapElement;
  map:any;
  encodedata:string;
  encodeddata:{};

  bar:any;
  option:BarcodeScannerOptions;

  persons: AngularFireList<any>;


  /*person ={
    name:'muhamed',
    lname:'mahmoud',
    age:34
  }*/

  constructor(public db: AngularFireDatabase,
    private http:Http,
    public barcodeScanner:BarcodeScanner) {
  this.persons= db.list('/people')

  }

  ngOnInit() {
    this.initmap();
    this.getmarker();
    
    
  }
  initmap(){
    
      let latlong = new google.maps.LatLng(36.784910, 34.588509);
      let options = {

        center:latlong,
        zoom:6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        //mapTypeId: google.maps.MapTypeId.terrain

      }
      this.map = new google.maps.Map(this.mapElement.nativeElement,options);

      let image = '';

      let marker = new google.maps.Marker({

        position:latlong,
        map :this.map,
        label:'muhamed here',
        icon : image,
        draggable:true
      });
      let discr="this is my position i was here in 2015"
      let info= new google.maps.InfoWindow({
        content : discr
      });
      marker.addListener('click',function(){
        info.open(this.map,marker);
      });


    }

    getmarker(){

      this.http.get('../../assets/map/marker.json').pipe(map((result)=>
      result.json())).subscribe(data=>{
        console.log(data);
        this.addmarker(data);
      });
    }

    addmarker(markers){
      for(let marker of markers){

        let location = {lat: marker.latitude , lng: marker.longitude};
        marker = new google.maps.Marker({
          position: location,
          map: this.map,
          title: marker.name,
          label: marker.content
        });
      }
      
    }

    scan(){
      this.option={
        prompt:"scan your barcode"
      }
      this.barcodeScanner.scan(this.option).then((barcodeData)=>{
        console.log(barcodeData);
        this.bar = barcodeData;
         barcodeData.cancelled
        barcodeData.format
        barcodeData.text 
      });
    }

    encode(){
      this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,
        this.encodedata).then((result)=>{
          console.log(result)
          this.encodeddata=result
        })
    }
  

  

}
