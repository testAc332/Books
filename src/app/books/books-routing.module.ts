import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookCreateComponent } from './book-create/book-create.component';


const routes: Routes = [
    {
        path: 'books',
        component: BooksComponent,
        children: [
            { path: '', component: BookListComponent },
            { path: 'create', component: BookCreateComponent },
            { path: 'details/:id', component: BookDetailsComponent },
            { path: 'update/:id', component: BookUpdateComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {
}
