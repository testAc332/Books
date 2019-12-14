import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { LogsListComponent } from './logs-list/logs-list.component';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';


@NgModule({
    declarations: [LogsComponent, LogsListComponent],
    imports: [
        CommonModule,
        LogsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatSortModule,
        MatInputModule,
        MatPaginatorModule
    ]
})
export class LogsModule {
}
