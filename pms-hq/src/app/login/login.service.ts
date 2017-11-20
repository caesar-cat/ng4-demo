import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    isLoggedIn: string = '';
    redirectUrl: string;

    login(state: boolean) {
        if(state) sessionStorage.setItem('login', '1')
        this.isLoggedIn = sessionStorage.getItem('login')
    }

    logout(): void {
        sessionStorage.setItem('login', '')
        this.isLoggedIn = ''
    }
}