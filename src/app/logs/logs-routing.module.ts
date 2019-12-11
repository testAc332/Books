import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from './logs.component';
import { LogsListComponent } from './logs-list/logs-list.component';


const routes: Routes = [
    {
        path: 'logs',
        component: LogsComponent,
        children: [
            { path: '', component: LogsListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogsRoutingModule {}
