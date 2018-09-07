import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { ClassroomsComponent } from './classrooms.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [CommonModule, ClassroomsRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    declarations: [ClassroomsComponent]
})
export class ClassroomsModule {}
