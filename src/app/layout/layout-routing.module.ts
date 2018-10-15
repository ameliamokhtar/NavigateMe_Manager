import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule' },
            { path: 'students', loadChildren: './students/students.module#StudentsModule' },
            { path: 'guests', loadChildren: './guests/guests.module#GuestsModule' },
            { path: 'offices', loadChildren: './offices/offices.module#OfficesModule' },
            { path: 'classrooms', loadChildren: './classrooms/classrooms.module#ClassroomsModule' },
            { path: 'facilities', loadChildren: './facilities/facilities.module#FacilitiesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
