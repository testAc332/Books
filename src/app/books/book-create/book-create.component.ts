import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-book-create',
    templateUrl: './book-create.component.html',
    styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
    book: Book;
    formIsValid = false;

    constructor(private booksService: BooksService,
                private router: Router,
                private location: Location
    ) {
        this.book = new Book('', '', 0);
    }

    ngOnInit() {
    }

    onValidate(isValid) {
        this.formIsValid = isValid;
    }

    create(delay: number = 0) {
        if (delay > 0) {
            setTimeout(() => this.booksService.create(this.book), delay);
        } else {
            this.booksService.create(this.book)
                .subscribe(() => {
                    this.router.navigate(['books']);
                });
        }
    }

    back() {
        this.location.back();
    }
}
