import { Component } from '@angular/core';
class student{
 id:number;
 name:string;
 address:string;
 marks:string;
 //proj:string="f";
 constructor(){
   this.name='';
   this.address='';
 }
}
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'second';
 age = 20;
 //num:number =13;
 //num1 : number=6;
 imageURL = "../assets/niit.png";
 e: student = new student();
 d_id: number = 0;
 search_id: number =0;
 search_id_record: number =0;
 search_val_name: string ="View Name";
 search_val_add: string ="View Address";
 search_grade: string ="View Grade";
 update_name: string ="";
 update_address: string="";
 update_marks: string=""; 
 e_array : Array<student> =[];
 display($event) {
   console.log("event is: " + $event);
 }
 save() {
   if(this.e.name.length !=0 && this.e.address.length !=0)
   this.e_array.push(this.e);
   //if(this.e.name != "" && this.e.id != "") 
  

   console.log("bye")
   console.log(this.e_array)
   console.log("hi")
   console.log(this.e);
   this.e = new student();

 }
 deleteid(){
   console.log(this.d_id);
  if (this.d_id != null){
    let pos = this.e_array.findIndex(k => k.id === this.d_id);
    if(pos > -1)
      this.e_array.splice(pos,1)
  }
  this.d_id = null;

     //this.e_array.forEach(function(item, i){
    // console.log("Ankita");
     //console.log(typeof(item.id));
     //console.log("mango");
     //console.log(typeof(this.d_id));
     //if((item.id) == parseInt(this.d_id)){
     // console.log("juhi");
     // this.e_array.splice(i,1);
     //console.log(item.id + "," + this.d_id);
     }
// getColor(){
//   return this.color =(this.num1> 10) ? 'blue':'red';
// }
 update(){

  if (this.search_id != null){
    let pos = this.e_array.findIndex(k => k.id === this.search_id);
    if(pos > -1){
      this.e_array[pos].name=this.update_name;
      this.e_array[pos].address=this.update_address;
      this.e_array[pos].marks=this.update_marks;
    }
  }
  this.search_id = null;

 }

searchme(){

  if (this.search_id_record != null){
    let pos = this.e_array.findIndex(k => k.id === this.search_id_record);
    if(pos > -1){
      this.search_val_name=this.e_array[pos].name;
      this.search_grade= this.e_array[pos].marks;
      this.search_val_add= this.e_array[pos].address;
  
    }
  }
  this.search_id_record = null;

}

}