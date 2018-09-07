import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomsComponent } from './classrooms.component';

const routes: Routes = [
    {
        path: '', component: ClassroomsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassroomsRoutingModule {
}
