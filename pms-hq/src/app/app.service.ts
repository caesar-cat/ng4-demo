import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {
    constructor(private http: HttpClient){}

    getEnvOption() {
        this.http.get('http://localhost:3000/env').subscribe(data => {
            localStorage.setItem('env', JSON.stringify(data))
        })
    }
}