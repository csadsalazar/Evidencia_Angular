import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, OfertaTrabajo } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  ofertaForm: OfertaTrabajo = {
    nombre: '',
    empresa: '', 
    puesto: '', 
    sueldo: 0, 
    descripcion: '' 
  };

  constructor(private router: Router, private dataService: DataService) {}

  agregarOferta(oferta: OfertaTrabajo) {
    if(this.ofertaForm.nombre === '' || this.ofertaForm.empresa === '' || this.ofertaForm.puesto === '' || this.ofertaForm.descripcion === '' ){
      Swal.fire({
        title: "Informacion incompleta!",
        text: "Tienes que llenar los campos con informacion valida.",
        icon: "error"
      });
    return;
  } else if (this.ofertaForm.sueldo <= 0){
    Swal.fire({
      title: "Suedo no coherente!",
      text: "Tienes que agregar un sueldo no menor a 0.",
      icon: "error"
    });
  }else {
    this.dataService.agregarOferta(oferta);
    this.ofertaForm = {
      nombre: '',
      empresa: '', 
      puesto: '', 
      sueldo: 0, 
      descripcion: '' 
    };
    this.router.navigate(['/admin']);
    Swal.fire({
      title: "Oferta de trabajo enviada!",
      text: "Envio exitoso.",
      icon: "success"
    
    });
  }
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
}
