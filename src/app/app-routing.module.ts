import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HojadevidaComponent } from './hojadevida/hojadevida.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'empleo', component: EmpleoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'hoja', component: HojadevidaComponent },
  { path: 'detalle', component: DetallesComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
