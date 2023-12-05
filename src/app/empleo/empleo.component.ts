import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService, OfertaTrabajo } from '../data.service';
@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent {

  constructor(private router: Router, public dataService: DataService) {}

  get ofertasTrabajo(): OfertaTrabajo[] {
    return this.dataService.ofertasTrabajo;
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    Swal.fire({
      title: "Adios!",
      text: "Vuelve pronto.",
      icon: "info"
    });
    this.router.navigate(['/index']);
  }

  navigateToHoja() {
    this.router.navigate(['/hoja']);
  }

  navigateToDetalle(oferta: OfertaTrabajo) {
    this.dataService.setOfertaSeleccionada(oferta);
    this.router.navigate(['/detalle']);
  }
}
