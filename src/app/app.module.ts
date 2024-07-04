import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CookieService} from 'ngx-cookie-service'
import { AuthModule } from '@modules/auth/auth.module';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,  // This should already configure your RouterModule
    ],
    providers: [
        CookieService,
        {
            provide:HTTP_INTERCEPTORS,
            useClass: InjectSessionInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
