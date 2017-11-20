import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { LoginService } from './login/login.service'
@Injectable()
export class AuthLogin implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}
    //该路由组件是否可被激活
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url
        return this.checkLogin(url)
    }
    //该路由下的子组件是否可被激活
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state)
    }
    //该模块是否可以被加载
    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url)
    }

    checkLogin(url: string): boolean {
        if(sessionStorage.getItem('login')) return true
        this.loginService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false
    }
}