import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';


const username=environment.username;
const password=environment.password;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 formSubmitted:boolean=false;

 loginForm=this.fb.group({
   username:['', [Validators.required]],
   password:['', [Validators.required]]
 })


  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }




  login(){

    const usernameForm=this.loginForm.get('username')?.value;
    const passwordForm=this.loginForm.get('password')?.value;

    this.formSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }

   if(this.loginForm.valid && (usernameForm.toLowerCase()===username) && (passwordForm===password)){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome Roberto !!',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigateByUrl('auth/admin');
   }
   else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Make sure you wrote your credentials right',

    })
   }

  }

  campoNoValido(campo:string):boolean{
    if(this.loginForm.get(campo)?.invalid && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }




}
