import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [CommonModule, FacilitiesRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    declarations: [FacilitiesComponent]
})
export class FacilitiesModule {}
