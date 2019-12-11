import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    book: Book;

    constructor(private route: ActivatedRoute,
                private booksService: BooksService,
                private location: Location) {
    }

    ngOnInit() {
        const bookId = +this.route.snapshot.paramMap.get('id');
        this.booksService.get(bookId)
            .subscribe(book => this.book = book);
    }

    back() {
        this.location.back();
    }
}
