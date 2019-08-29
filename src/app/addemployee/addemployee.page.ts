import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {Tab2Page} from '../tab2/tab2.page';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.page.html',
  styleUrls: ['./addemployee.page.scss'],
})
export class AddemployeePage implements OnInit {
  data={
    fname:'',
    lname:'',
    age:'',
    gender:'',
    salary:'',
    date:''

  }

  constructor(public sqlite:SQLite,public navCtrl:NavController) { }

  ngOnInit() {
  }

  savedata(){
    this.sqlite.create({
      name:'data.db',
      location:'default'
    }).then ((db:SQLiteObject)=>{db.executeSql('INSERT INTO Employees VALUES(NULL,?,?,?,?,?,?)',
  [this.data.fname,
  this.data.lname,
this.data.age,
this.data.gender,
this.data.salary,
this.data.date]).then(()=>{
  console.log('Execute SQL insert');
  this.navCtrl.navigateForward('tab2');

} )
.catch(e=> console.log(e));
}).catch(e=> console.log(e));

  }

}
