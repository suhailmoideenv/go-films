import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    rootUrl = environment.rootURL;

    constructor(private http: HttpClient) { }

    getFilmsList() {
        return this.http.post(this.rootUrl + 'get', null)
    }

    getFilmDetails(nameObj) {
        return this.http.post(this.rootUrl + 'get/details', nameObj)
    }

    saveFilmDetails(filmObj) {
        return this.http.post(this.rootUrl + 'save', filmObj)
    }
}