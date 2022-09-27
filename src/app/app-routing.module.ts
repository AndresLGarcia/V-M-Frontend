import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch:'full' },
  { path:'inicio', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
