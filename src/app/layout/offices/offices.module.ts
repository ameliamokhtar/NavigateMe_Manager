import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [CommonModule, OfficesRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    declarations: [OfficesComponent]
})
export class OfficesModule {}
