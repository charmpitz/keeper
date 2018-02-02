import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from './page/home/home.page';
import { ROUTES } from './routing'
import { environment } from '../environments/environment';

@NgModule({
    // Own module components
    declarations: [
        AppComponent,
        HomePage
    ],

    // Other Modules that contain components
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {
            useHash: false ,
            enableTracing: environment.router.enableTracing
        })
    ],

    // Singleton services
    providers: [],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
