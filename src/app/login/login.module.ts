import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Service } from '../service/service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LoginRoutingModule,
        ReactiveFormsModule],
    providers:[Service],
    declarations: [LoginComponent]
})
export class LoginModule {}
