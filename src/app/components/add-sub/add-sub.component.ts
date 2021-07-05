import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sub } from "../../Sub"

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.email) {
      alert("Please enter a valid e-mail address");
      return
    }
    if(!this.password) {
      alert("Please enter a valid password")
      return
    }
    if(!this.confirmPassword){
      alert("Please confirm your password")
      return
    }
    if(this.password !== this.confirmPassword){
      alert("Password and confirmed password do not match")
      return
    }

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
