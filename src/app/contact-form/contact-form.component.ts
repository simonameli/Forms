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
  { id: 2, name:'phone'},
  { id: 3, name:'pidgeon'},
  { id: 4, name:'pec'},
];

}