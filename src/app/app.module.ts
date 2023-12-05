import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EmpleoComponent } from './empleo/empleo.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HojadevidaComponent } from './hojadevida/hojadevida.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistroComponent,
    DashboardComponent,
    PerfilComponent,
    EmpleoComponent,
    DashboardAdminComponent,
    HojadevidaComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Importa FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
