import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { Router } from '@angular/router'; 

import { User } from 'app/models/user';

@Injectable()

export class AuthService {
    constructor(private http: Http, private router: Router) { }

    register(user: User) {
        this.http.post(`${environment.apiUrl}/authentication/register`, user)
                .subscribe(res => {
                    this.login(user);
                })
                err => {
                    if (err.status == 400){
                        console.log('User already exists.');
                    }
                    else
                        console.log(err);
                    }
    }

    login(user: User) {
        this.http.post(`${environment.apiUrl}/authentication/login`, user)
            .subscribe((res: any) => 
                {
                    localStorage.setItem(`${environment.token_name}`, res._body);
                    window.location.href = "/";
                },
                err => {
                    if (err.status == 400){
                        console.log('Incorrect username or password.');
                        //TODO: import an alert/toaster
                        //this.alertService.error('Incorrect username or password.', { id: 'alert-1' });
                    }
                    else
                        console.log(err);
                    }
            );
    }

    logout() {
        localStorage.removeItem(`${environment.token_name}`);
        location.reload();
    }

    isLoggedIn(){
        var token = localStorage.getItem(`${environment.token_name}`);
        return token != 'undefined' && token != null;
    }
}