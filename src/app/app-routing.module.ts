import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from "./task-page/task-page.component";
import { AllTasksComponent } from "./all-tasks/all-tasks.component";

const routes: Routes = [
  {path:'all-tasks', component:AllTasksComponent},
  {path:'task', component:TaskPageComponent},
  { path: '', redirectTo: '/all-tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
