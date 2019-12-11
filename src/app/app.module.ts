import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { LogsModule } from './logs/logs.module';

const appRoutes: Routes = [
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,

        BooksModule,
        LogsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
