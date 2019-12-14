import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { LogService } from '../../logs/shared/log.service';
import { MessagingService } from '../../shared/messaging.service';
import Log from '../../logs/shared/log';
import Message from '../../shared/message';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    books: Book[];

    constructor(
        private logService: LogService,
        private messagingService: MessagingService
    ) {
        this.books = [
            new Book('Poem', 'Pushkin', 2700),
            new Book('Harry Potter', 'Joanne Rowling', 2300),
            new Book('Lord of the rings', 'John Tolkien', 3900),
            new Book('Cat book', 'Pukov', 2780),
            new Book('Test book', 'Tester', 2350),
            new Book('12 Poem about summer', 'Plushkin', 5500),
            new Book('Modern cars', 'Elon Max', 2500),
            new Book('HPMOR', 'Eliezer Udkowsky', 3300),
            new Book('Lord of the rings 2', 'John Tolkien', 4190),
            new Book('Lord of the rings 3 fanfics', 'Pushkin', 8900),
            new Book('Harry Potter: back to mordor', 'Joanne Rowling', 10),
            new Book('Lord of the cats', 'John Catswill', 3950),
        ];
    }

    getAll(): Observable<Book[]> {
        return of(this.books);
    }

    get(id: number): Observable<Book> {
        return of(this.books.find(b => b.id === id));
    }

    create(book: Book): Observable<Book> {
        book = new Book(book.title, book.author, book.price);
        this.books.push(book);
        this.logAndMessage(book, 'created');
        return of(book);
    }

    remove(id: number): Observable<Book> {
        let deleted;
        this.books = this.books.filter(book => {
            if (book.id !== id) {
                return book;
            }
            deleted = book;
        });
        if (deleted) {
            this.logAndMessage(deleted, 'removed');
            return of(deleted);
        } else {
            return of(null);
        }
    }

    update(book: Book): Observable<Book> {
        const updatedBook: Book = this.books.find(b => b.id === book.id);
        updatedBook.id = book.id;
        updatedBook.title = book.title;
        updatedBook.author = book.author;
        updatedBook.price = book.price;
        this.logAndMessage(updatedBook, 'updated');
        return of(updatedBook);
    }


    private logAndMessage(book: Book, event: string) {
        const log = new Log(
            book,
            event,
            `Book: ${book.title}`
        );
        this.logService.add(log);
        this.messagingService.send(new Message(log, 'log'));
    }
}
