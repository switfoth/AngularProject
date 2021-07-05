import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sub } from "../../Sub"
import { FormControl, FormGroup } from "@angular/forms"

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.css']
})
export class AddSubComponent implements OnInit {
  @Output() onAddSub: EventEmitter<Sub> = new EventEmitter();

  addSubForm = new FormGroup({
    email!: new FormControl(''),
    subscription!: new FormControl(''),
    password!: new FormControl(''),
    confirmPassword!: new FormControl(''),
  })

  email!: string;
  subscription!: string;
  password!: string;
  confirmPassword!: string;


  constructor() { }

  ngOnInit(): void {
    this.subscription = 'Advanced';
  }

  onClear() {
    this.email = '';
    this.subscription = 'Advanced';
    this.password = '';
    this.confirmPassword = '';
  }

  onSubmit() {

    // if(!this.email) {
    // }
    // if(!this.password) {
    // }
    // if(!this.confirmPassword){
    // }
    // if(this.password !== this.confirmPassword){
    // }

    const newSub = {
      email: this.email,
      subscription: this.subscription,
      password: this.password
    }

    this.onAddSub.emit(newSub);

    this.email = '';
    this.password = '';
    this.confirmPassword = '';

  }

}
