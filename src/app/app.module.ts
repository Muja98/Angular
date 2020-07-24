import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {AuthenticationService} from './service/authentication.service';
import { LoginComponent } from './login/login.component'
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MainModule,
    UserModule,
    DashboardModule,
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent}
    ]),
    NgbModule,
    NgSimpleSidebarModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
