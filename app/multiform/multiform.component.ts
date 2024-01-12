import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl } from "@angular/forms"
@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent implements OnInit {

  constructor(private builder:FormBuilder) { }
  isLinear=true;
  ngOnInit(){

  }
    Student=this.builder.group({
      basic:this.builder.group({
        firstname:this.builder.control('',Validators.required),
        lastname:this.builder.control('',Validators.required),
        datebirth:this.builder.control('',Validators.required),
        agedata:this.builder.control('',Validators.required),
        generdata:this.builder.control('',Validators.required),
        passdata:this.builder.control('',Validators.required),
        boxdata:this.builder.control('',Validators.required),
        option:this.builder.control('',Validators.required),
      })
    });
    mobileNumberControl = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]*$/)
    ]);
        get Basicform(){
          return this.Student.get("basic") as FormGroup;
        }
        HandleSubmit(){
          if(this.Student.valid){
            console.log(this.Student.value);
          }
        }
    
  }
  

    
  
