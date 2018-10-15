import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Service } from '../../service/service';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    providers:[Service],
    declarations: [TablesComponent]
})
export class TablesModule {}
