import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Hoja } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hojadevida',
  templateUrl: './hojadevida.component.html',
  styleUrls: ['./hojadevida.component.css']
})
export class HojadevidaComponent {
  hojaForm: Hoja = {
    username: '',
    apellido: '', 
    cedula: '', 
    telefono: '', 
    correo: '',
    direccion: '',
    descripcion: '' 
  };

  constructor(private router: Router, private dataService: DataService) {}

  agregarHoja(hoja: Hoja) {
    if(this.hojaForm.username === '' || this.hojaForm.apellido === '' || this.hojaForm.correo === '' || this.hojaForm.direccion === '' || this.hojaForm.descripcion === '' ){
      Swal.fire({
        title: "Informacion incompleta!",
        text: "Tienes que llenar los campos con informacion valida.",
        icon: "error"
      });
    return;
  } else if (this.hojaForm.cedula.length < 7 || this.hojaForm.telefono.length <= 10){
    Swal.fire({
      title: "Los valores numericos no son coherentes!",
      text: "Tienes que agregar un numero de cedula o celular coherente.",
      icon: "error"
    });
  }else {
    this.dataService.agregarHoja(hoja);
    this.hojaForm = {
      username: '',
      apellido: '', 
      cedula: '', 
      telefono: '', 
      correo: '',
      direccion: '',
      descripcion: '' 
    };
    this.router.navigate(['/dashboard']);
    Swal.fire({
      title: "Hoja de vida enviada!",
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


