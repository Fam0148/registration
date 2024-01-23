import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
    username!: string;
    password!: string;
    confirmPassword!: string;
    messge="";
  
    onSubmit() {
      if (this.username && this.password && this.confirmPassword && this.password === this.confirmPassword) 
      {
        return this.messge="Registration Successfull"
      } 
      else 
      {
        return this.messge="Registration Failed !"
      }
    }
  }

