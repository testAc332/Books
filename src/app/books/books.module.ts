import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BookComponent,
        BookCreateComponent,
        BookListComponent,
        BooksComponent,
        BookUpdateComponent,
        BookDetailsComponent
    ],
    exports: [
        BooksComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class BooksModule {
}
