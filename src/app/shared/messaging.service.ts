import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Message from './message';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    subject = new Subject<Message>();

    constructor() {}

    send(message: Message) {
        this.subject.next(message);
    }

    listen(): Observable<Message> {
        return this.subject.asObservable();
    }
}
