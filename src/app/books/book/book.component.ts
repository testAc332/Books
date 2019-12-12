import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/form.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
    @Input() book: Book;
    @Output() validate = new EventEmitter<boolean>();
    form: FormGroup;
    subscribes = new Subscription();

    constructor(private formBuilder: FormBuilder,
                private formService: FormService
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            title: [this.book.title, [Validators.minLength(5), Validators.required]],
            author: [this.book.author, [Validators.required]],
            price: [this.book.price]
        });
        this.formService.bindModel(this.book, this.form);
        this.validationCheck();
    }

    ngOnDestroy(): void {
        this.subscribes.unsubscribe();
    }

    validationCheck() {
        this.subscribes.add(
            this.form.statusChanges.subscribe(
                status => this.validate.emit(status === 'VALID')
            )
        );
    }
}
