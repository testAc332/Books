import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BooksService } from '../shared/books.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[];

    constructor(private booksService: BooksService,
                private router: Router
    ) { }

    async ngOnInit() {
        this.booksService.getAll().subscribe(
            books => this.books = books
        );
    }

    create() {
        this.router.navigate([`/books/create`]);
    }

    remove(book: Book) {
        this.booksService.remove(book.id)
            .subscribe(
                removed => {
                    if (removed) {
                        this.books = this.books.filter(b => b.id !== removed.id);
                    }
                }
            );
    }

    update(book: Book) {
        this.router.navigate([`/books/update/${book.id}`]);
    }

    details(book: Book) {
        this.router.navigate([`/books/details/${book.id}`]);
    }
}
