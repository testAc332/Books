import { Component, OnDestroy, OnInit } from '@angular/core';
import Log from '../shared/log';
import { LogService } from '../shared/log.service';
import { MessagingService } from '../../shared/messaging.service';
import Message from '../../shared/message';
import { SubscriptionManager } from '../../shared/Subscription.manager';


@Component({
    selector: 'app-logs-list',
    templateUrl: './logs-list.component.html',
    styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit, OnDestroy {
    logs: Log[];
    private subscriptions = new SubscriptionManager();

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
        this.subscriptions.append(
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
