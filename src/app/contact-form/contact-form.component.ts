import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  push: boolean = false;
  
submit(f){
  let a = f.value.toString();
  console.log(a);
}

contactMethods =[
  { id: 1, name:'email'},
  { id: 1, name:'phone'},
  { id: 1, name:'pidgeon'},
  { id: 1, name:'pec'},
];

}