import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/user';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [AuthService]
})

export class RegisterComponent {
    registerForm: FormGroup;
    passwordsForm: FormGroup;
    isSubmitted: Boolean = false;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) { }

    ngOnInit() {
        this.passwordsForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: this.areEqual });

        this.registerForm = this.formBuilder.group({
            email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,4}$")],
            passwords: this.passwordsForm,
        })
    }

    areEqual(formGroup: FormGroup) {
        let password = formGroup.get('password');
        let confirmPassword = formGroup.get('confirmPassword');

        if (confirmPassword.errors == null || 'passwordMismatch' in confirmPassword.errors) {
            if (password.value != confirmPassword.value)
                confirmPassword.setErrors({ passwordMismatch: true });
            else
                confirmPassword.setErrors(null);
        }
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.registerForm.invalid) {
            console.log("invalid");
            return;
        }

        this.isSubmitted = false;

        this.authService.register(new User(this.registerForm.get("email").value, this.passwordsForm.get("password").value));
    }
}