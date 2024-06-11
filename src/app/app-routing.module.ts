import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileComponent } from './components/file/file.component';
import { SelectComponent } from './components/select/select.component';



const routes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'file', component: FileComponent },
    { path: 'select', component: SelectComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
