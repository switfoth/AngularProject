import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sub } from "../../Sub"
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.css']
})


export class AddSubComponent implements OnInit {
  @Output() onAddSub: EventEmitter<Sub> = new EventEmitter();

  email!: string;
  subscription!: string;
  password!: string;
  confirmPassword!: string;
  errorFound!: boolean;
  errorMessage!: string;


  addSubForm = new FormGroup({
    email!: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    subscription!: new FormControl('Advanced'),
    password!: new FormControl('', Validators.compose([Validators.required])),
    confirmPassword!: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor () {

  }

  ngOnInit(): void {
  }

  onClear() {
    this.errorFound = false
    this.addSubForm.reset();
  }

  getData() {
    let pass = this.addSubForm.value.password
    let confirmPass = this.addSubForm.value.confirmPassword
    if( pass.length < 8 ){
      this.errorFound = true;
      this.errorMessage = "Password must be at least 8 characters long"
      return
    }
    if ( pass.search(/[a-zA-Z0-9]/) < 0 ){
      this.errorFound = true;
      this.errorMessage = "Password must contain at least one alphanumeric character"
      return
    }
    if ( pass.search(/[!@#$%^&*()_+{}|[\]\:"<>?;',./*-+]/) < 0){
      this.errorFound = true;
      this.errorMessage = "Password must contain a special character"
      return
    }
    if ( pass !== confirmPass ){
      this.errorFound = true;
      this.errorMessage = "Confirmed password does not match password"
      return
    }
    const newSub = {
      email: this.addSubForm.value.email,
      subscription: this.addSubForm.value.subscription,
      password: this.addSubForm.value.password,
      created: new Date()
    }
    this.onAddSub.emit(newSub)
    this.errorFound = false
    this.addSubForm.reset();
  }
  get validationMessage() {
    return this.addSubForm.controls;
  }

}
