import { Injectable } from '@angular/core';
import { HttpEvent, 
         HttpInterceptor, 
         HttpHandler, 
         HttpResponse,
         HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //设置请求头
        let _req = req.clone({
            url: req.url.replace('http://', 'http://'),
            headers: req.headers.set('Authorization', 'HQ')
        })
        //处理响应体
        return next.handle(req).map(event => {
            if (event instanceof HttpResponse) {
              if (event.status === 401) {
                // 未认证，去登录
              }
              //TOOD 其他情况
            }
            return event;
        })
    }
}