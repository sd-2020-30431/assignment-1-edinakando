import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';

// @Injectable({
//     providedIn: 'root'
//   })


export class AuthServcice{
    // constructor(public formBuilder: FormBuilder){ }
    // readonly baseApiRoute = 'http://localhost:54277/api';

    // userForm = this.formBuilder.group({
    //     Email: ['', Validators.email],
    //     Passwords: this.formBuilder.group({
    //         Password: ['', Validators.required],
    //         ConfirmPassword: ['', Validators.required]
    //     }, {validator: this.comparePasswords})
    // })

    // comparePasswords(formGroup: FormGroup){
    //     let password = formGroup.get("password");
    //     let confirmPassword = formGroup.get("confirmPassword");

    //     if(password.value != confirmPassword.value){
    //         password.setErrors({});
    //         confirmPassword.setErrors({});
    //     }
    // }

    // register() {
    //     var user = {
    //         Email: this.userForm.Email,
    //         Password: this.userForm.Passwords.Password
    //     }
       
    //     return this.httpClient.post(this.baseApiRoute + '/Authentication/Register', user);
    //   }
}