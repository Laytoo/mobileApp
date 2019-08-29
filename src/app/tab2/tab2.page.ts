import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {Tab1Page} from '../tab1/tab1.page';
import { from } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data:any=[];
  peopleList : AngularFireList<any>;

  
  constructor(public  modCtrl: ModalController,
    public navCtrl: NavController,
     public db:AngularFireDatabase,
     public sqlite:SQLite ) {
    this.peopleList = db.list('/people')
  }

  ngOnInit(){
    this.getdata();
  }


  createPerson(name,lname,age,dept){
    this.peopleList.push({

      name : name,
      lname: name,
      age :age,
      dept: dept,

    }).then(newPerson => {
      this.navCtrl.navigateForward('Tab1Page')
    });

  }




  gotomain(){
    this.modCtrl.create({component:Tab1Page});
  
   
  }
  

  getdata(){
this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table Employees(id INTEGER PRIMARY KEY,name VARCHAR(32),lname TEXT,age INT,gender TEXT,salary INT,date TEXT)', [])
    .then(() => console.log('Executed SQL'))
    .catch(e => console.log(e));


  


  db.executeSql('SELECT * FROM Employees ORDER BY id DESC',[]).then(
    res=>{console.log('Executed SQL Done');
    this.data = [];
    for(let i=0;i<res.rows.length;i++){
      this.data.push({
        id :res.rows.item(i).id,
        fname:res.rows.item(i).fname,
        lname:res.rows.item(i).lname,
        age:res.rows.item(i).age,
        gender:res.rows.item(i).gender,
        salary:res.rows.item(i).salary,
        date:res.rows.item(i).date,

      })
    }
    }
  ).catch(e=>console.log(e));

  
})
.catch(e => console.log(e));
  

}

refresh(){
  this.getdata()
}

addemployee(){
  this.navCtrl.navigateForward('addemployee');
}

editemployee(id,fname,lname,age,gender,salary,date){
  this.navCtrl.navigateForward(['editemployee',{
    id:id,
    fname:fname,
    lname:lname,
    age:age,
    gender:gender,
    salary:salary,
    date:date

  }]);


}
delete(id){
  this.sqlite.create({
    name: 'data.db',
    location: 'default'
  })
    .then((db: SQLiteObject) => {
  
  
      db.executeSql('DELETE FROM Employees WHERE id=?', [id])
      .then(() =>{console.log('Executed SQL Delete');this.getdata()} )
      .catch(e => console.log(e));

})
}
}


