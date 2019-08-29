import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {

  /* @ViewChild("map",{static:true}) mapElement;
  map:any; */
  /* text:string; */

  constructor() { 
   /*  console.log('hello from mpa');
    this.text = "hello word"; */
  }

  ngOnInit() {
    /* this.initmap(); */

  }
  /* initmap(){
    
    let latlong = new google.maps.LatLng(36.784910, 34.588509);
    let options = {

      center:latlong,
      zoom:14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,options);


  }
 */

}
