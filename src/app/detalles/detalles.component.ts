import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, OfertaTrabajo } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  ofertaSeleccionada: OfertaTrabajo | null = null;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.ofertaSeleccionada = this.dataService.getOfertaSeleccionada();
  }


  logout() {
    this.dataService.currentUser = null;
    Swal.fire({
      title: "Adios!",
      text: "Vuelve pronto.",
      icon: "info"
    });
    this.router.navigate(['/index']);
  }
  navigateToEmpleo() {
    this.router.navigate(['/empleo']);
  }
  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
