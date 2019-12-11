import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Book } from '../shared/book';
import { Location } from '@angular/common';

@Component({
    selector: 'app-book-update',
    templateUrl: './book-update.component.html',
    styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
    book: Book;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private booksService: BooksService,
                private location: Location) {
        const bookId = +this.route.snapshot.paramMap.get('id');
        booksService.get(bookId).subscribe(book => {
            this.book = new Book(book.title, book.author, book.price);
            this.book.id = book.id;
        });
    }

    ngOnInit() { }

    update() {
        this.booksService.update(this.book)
            .subscribe(book => {
                return this.router.navigate(['books']);
            });
    }

    back() {
        this.location.back();
    }
}
