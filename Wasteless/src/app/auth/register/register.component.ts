import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent{
    registerForm : FormGroup;
    passwordsForm : FormGroup;
    submitted = false;

    constructor(private formBuilder : FormBuilder){}

    ngOnInit(){
        this.passwordsForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: this.areEqual });

        this.registerForm = this.formBuilder.group({
            email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$")],
            passwords: this.passwordsForm,
        })
    }

    areEqual(formGroup: FormGroup){
        let password = formGroup.get('password');
        let confirmPassword = formGroup.get('confirmPassword');
        
        if (confirmPassword.errors == null || 'passwordMismatch' in confirmPassword.errors) {
          if (password.value != confirmPassword.value)
            confirmPassword.setErrors({ passwordMismatch: true });
          else
            confirmPassword.setErrors(null);
        }
    }

    onSubmit(){
        this.submitted = true;
        console.log(this.registerForm);
        if (this.registerForm.invalid) {
            console.log("invalid");
            return;
        }
    }
}