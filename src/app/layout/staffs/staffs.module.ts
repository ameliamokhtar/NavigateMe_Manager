import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [CommonModule, StaffsRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    declarations: [StaffsComponent]
})
export class StaffsModule {}
