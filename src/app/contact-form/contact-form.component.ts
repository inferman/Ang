import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  log(x) {
    console.log(x);
  }

  submit(f) {
    if(f.invalid) {
      return false
    }
    alert('form submitted');
    console.log(f);
  }

  contactMethod = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];

  ngOnInit() {
  }

}
