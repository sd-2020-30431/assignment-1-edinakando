import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

import { User } from 'app/models/user';

@Injectable()

export class AuthService {
    constructor(private http: Http) { }

    register(user: User) {
        this.http.post(`${environment.apiUrl}/authentication/register`, user)
                .subscribe(res => {
                    console.log(res)
                })
    }
}