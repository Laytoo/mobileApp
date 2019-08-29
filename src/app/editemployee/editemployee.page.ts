import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {NavParams} from '@ionic/angular';
import {NavController} from '@ionic/angular';



@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.page.html',
  styleUrls: ['./editemployee.page.scss'],
})
export class EditemployeePage implements OnInit {

  data={
    id:0,
    fname:'',
    lname:'',
    age:0,
    gender:'',
    salary:0,
    date:''

  }

  constructor(public sqlite:SQLite,
    public navparams:NavParams,
    public navCtrl:NavController) {

    this.data.id = navparams.get('id');
    this.data.fname= navparams.get('fname');
    this.data.lname = navparams.get('lname');
    this.data.age = parseInt(navparams.get('age'));
    this.data.gender = navparams.get('gender');
    this.data.salary = parseInt(navparams.get('salary'));
    this.data.date = navparams.get('date');

   }

  ngOnInit() {
  }

  update(){
    this.sqlite.create({
      name:'data.db',
      location:'default'
    }).then ((db:SQLiteObject)=>{db.executeSql('UPDATE Employees SET fname=?,lname=?,age=?,gender=?,salary=?,date=?,WHERE id=?',
  [this.data.fname,
  this.data.lname,
this.data.age,
this.data.gender,
this.data.salary,
this.data.date]).then(()=>{
  console.log('Execute SQL insert');
  this.navCtrl.pop();

} )
.catch(e=> console.log(e));
}).catch(e=> console.log(e));
  }

}
