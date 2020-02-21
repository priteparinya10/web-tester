import { JobComponent } from './component/job/job.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:JobComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
  // {path:'detail-project',component:DetailProjectComponent},
  // {path:'list-project',component:ListProjectComponent},
  // {path:'upload-project',component:UploadProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
