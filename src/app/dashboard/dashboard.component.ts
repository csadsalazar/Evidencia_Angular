import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, OfertaTrabajo } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router, public dataService: DataService) {}

  get ofertasTrabajo(): OfertaTrabajo[] {
    return this.dataService.ofertasTrabajo;
  }


  logout() {
    this.dataService.currentUser = null;
    Swal.fire({
      title: 'Adios!',
      text: 'Vuelve pronto.',
      icon: 'info',
    });
    this.router.navigate(['/index']);
  }

  navigateToEmpleo() {
    this.router.navigate(['/empleo']);
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToHoja() {
    this.router.navigate(['/hoja']);
  }
  navigateToDetalle(oferta: OfertaTrabajo) {
    this.dataService.setOfertaSeleccionada(oferta);
    this.router.navigate(['/detalle']);
  }
}
 