import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileComponent } from './components/file/file.component';
import { SelectComponent } from './components/select/select.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Home' } },
      { path: 'home', component: HomeComponent, data: { title: 'Home' } },
      { path: 'file', component: FileComponent, data: { title: 'File' } },
      { path: 'select', component: SelectComponent, data: { title: 'Select' } },
      {
        path: 'description',
        component: DescriptionsComponent,
        data: { title: 'Description' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
