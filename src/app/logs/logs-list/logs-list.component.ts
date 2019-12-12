import { Component, OnDestroy, OnInit } from '@angular/core';
import Log from '../shared/log';
import { LogService } from '../shared/log.service';
import { MessagingService } from '../../shared/messaging.service';
import Message from '../../shared/message';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-logs-list',
    templateUrl: './logs-list.component.html',
    styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit, OnDestroy {
    logs: Log[];
    private subscriptions = new Subscription();

    constructor(private messagingService: MessagingService,
                private logService: LogService
    ) { }

    ngOnInit() {
        this.logs = this.logService.getAll();
        this.subscribeForUpdates();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    private subscribeForUpdates() {
        this.subscriptions.add(
            this.messagingService.listen().subscribe(
                (message: Message) => {
                    if (message.type === 'log') {
                        this.logs.push(message.data as Log);
                    }
                }
            )
        );
    }
}
