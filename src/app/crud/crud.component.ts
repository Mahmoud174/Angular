import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {userData=new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
  userAge:new FormControl('',[Validators.min(15),Validators.max(60)]),
  userMail:new FormControl('',[Validators.email]),
 userPassword:new FormControl('',[Validators.pattern(/^[A-Z]{3,8}$/)]),
})
createMode=true;
editMode=false;
pageSize:20;
pageNumber:1;
movies:any[];
pages:any[]=[];
userCont:object[]=[];
users:object[];
stars:any[]=[];
searchText:any;
currentIndex;
editedUser:object;
submitForm(){
if(this.editMode)
{
 this.userCont[this.currentIndex]=this.userData.value;
 this.createMode=true;
 this.editMode=false
}
else{
 this.userCont.push(this.userData.value);
 localStorage.setItem('userData',JSON.stringify(this.userCont));
}

this.userData.reset();  //clear form after add
}

deleteUser(index){
this.userCont.splice(index,1);
localStorage.setItem('userData',JSON.stringify(this.userCont));

}
editUser(index,user){
this.userData.controls['userName'].setValue(user.userName);
this.userData.controls['userAge'].setValue(user.userAge);
this.userData.controls['userMail'].setValue(user.userMail);
this.userData.controls['userPassword'].setValue(user.userPassword)

this.createMode=false;
this.editMode=true;
this.currentIndex=index

}
  ngOnInit() {
  }

}
