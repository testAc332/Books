import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Log from '../shared/log';
import { LogService } from '../shared/log.service';
import { MessagingService } from '../../shared/messaging.service';
import Message from '../../shared/message';
import { Subscription } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
    selector: 'app-logs-list',
    templateUrl: './logs-list.component.html',
    styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit, OnDestroy {
    logs: Log[];
    private subscriptions = new Subscription();
    displayedColumns = ['description', 'action'];
    dataSource: MatTableDataSource<Log>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private messagingService: MessagingService,
                private logService: LogService
    ) {
    }

    ngOnInit() {
        this.logs = this.logService.getAll();
        this.subscribeForUpdates();
        this.dataSource = new MatTableDataSource<Log>(this.logs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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
