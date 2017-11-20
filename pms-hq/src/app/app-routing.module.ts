import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { AuthLogin } from './auth-login.service'
const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' }, 
    //路由懒加载
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthLogin] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
