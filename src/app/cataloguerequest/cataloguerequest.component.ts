import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-cataloguerequest',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cataloguerequest.component.html',
  styleUrl: './cataloguerequest.component.css'
})
export class CataloguerequestComponent  {
regdata:FormGroup;
constructor(private _formBuilder: FormBuilder){
  this.regdata = this._formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.compose,([Validators.required,Validators.email])],
    contact:['',Validators.required],
    message:['',Validators.required],
  })
}
ngOnInit():void{
  this.regdata=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    contact:new FormControl(),
    message:new FormControl(),
  })
}


send(regdata:NgForm){
  console.log(regdata.value)
  console.log(regdata.valid)
  console.log(this.regdata.get('email')?.value)
}

}
