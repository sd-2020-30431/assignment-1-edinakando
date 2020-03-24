import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent{
    loginForm: FormGroup;
    isSubmitted: Boolean = false;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$")],
            password: ['', Validators.required],
        })
    }
    
    onSubmit() {
        this.isSubmitted = true;

        if (this.loginForm.invalid) {
            console.log("invalid");
            return;
        }
        this.isSubmitted = false;

        this.authService.login(new User(this.loginForm.get("email").value, this.loginForm.get("password").value));
    }

    logout(){
        this.authService.logout();
    }
}