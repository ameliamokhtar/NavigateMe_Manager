import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Service } from '../service/service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,public service:Service) {}
    loginForm = new FormGroup ({
        email: new FormControl(),
        pass: new FormControl()
      });

    ngOnInit() {}
    

    //todo 
    //add toaster for api calls
    onLoggedin(data) {
        let loginData = {email:data.email,password:data.pass}
        this.service.login(loginData).subscribe(res=>{
            if(res.successful){
                sessionStorage.setItem('role',res.role)
                sessionStorage.setItem('email',res.email)
                this.router.navigate(['/dashboard']);
            }else{
                
            }
            
        })
    }
}
