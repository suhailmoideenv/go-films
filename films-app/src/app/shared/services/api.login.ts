import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    rootUrl = environment.rootURL;

    constructor(private http: HttpClient) { }

    register(registerObj) {
        return this.http.post(this.rootUrl + 'register', registerObj)
    }

    login(loginObj) {
        return this.http.post(this.rootUrl + 'login', loginObj)
    }
}