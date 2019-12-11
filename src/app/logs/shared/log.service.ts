import { Injectable } from '@angular/core';
import Log from './log';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    logs: Log[] = [];

    constructor() { }

    add(log: Log) {
        this.logs.push(log);
    }

    getAll(): Log[] {
        return this.logs.slice();
    }
}
