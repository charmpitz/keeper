import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './routing'
import { environment } from '../environments/environment';

// Pages
import { HomePage } from './page/home/home.page';

// Components
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
    // Own module components
    declarations: [
        AppComponent,
        HomePage,
        MenuComponent
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
