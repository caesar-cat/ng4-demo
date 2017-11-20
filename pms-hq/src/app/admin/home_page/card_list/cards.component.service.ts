import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardsService {
    constructor(private http: HttpClient) {}
    getQueryData() {
        return this.http.get(`${JSON.parse(localStorage.getItem('env'))['url']}/sgp/MonitorService/all`)
    }
}
