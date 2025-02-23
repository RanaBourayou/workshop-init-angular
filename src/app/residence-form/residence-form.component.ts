import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-residence-form',
  templateUrl: './residence-form.component.html',
  styleUrls: ['./residence-form.component.css']
})
export class ResidenceFormComponent {
  ResidenceForm!:FormGroup; 
  ngOnInit(){ //class ^predefini a linitialisation au lancement du composant

  this.ResidenceForm= new FormGroup({
    Name: new FormControl('', [Validators.required,Validators.pattern("^[A-Z][a-z]+$")]),
    Address: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(50)]),
    Status:new FormControl('',Validators.required),
    Image:new FormControl('',Validators.required),
  })

 
  }

  onSubmit(){
    return console.log(this.ResidenceForm.value)
  }


  get name(){
    return this.ResidenceForm.get('name')
  }
  test(){
    return console.log(this.ResidenceForm.get('name')?.value)
  }
  

}
