import { Component } from '@angular/core';
import { Person } from 'src/app/Classes/person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  gender = ['Male', 'Female', 'Other'];

  model = new Person(18, 'Heber', 'Gonzalez', this.gender[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newPerson(){
    this.model = new Person(42, '', '');
  }
}
