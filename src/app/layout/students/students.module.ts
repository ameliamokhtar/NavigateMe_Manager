import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { PageHeaderModule } from '../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Service } from '../../service/service';

@NgModule({
    imports: [CommonModule, StudentsRoutingModule, PageHeaderModule,Ng2SmartTableModule],
    providers:[Service],
    declarations: [StudentsComponent]
})
export class StudentsModule {}
