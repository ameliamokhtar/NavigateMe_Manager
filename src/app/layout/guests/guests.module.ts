import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsComponent } from './guests.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Service } from '../../service/service';

@NgModule({
    imports: [CommonModule, GuestsRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    providers:[Service],
    declarations: [GuestsComponent]
})
export class GuestsModule {}
