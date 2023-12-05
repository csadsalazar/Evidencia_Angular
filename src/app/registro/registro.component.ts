import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, User } from '../data.service';
import Swal from 'sweetalert2'

@Component({ 
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  user: User = {
    username: '',
    apellido: '',
    password: '',
    cedula: '',
    telefono: '',
    correo: '',
  };

  constructor(private router: Router, private dataService: DataService) {}

  navigateToIndex() {
    this.router.navigate(['/']);
  }

  register() {
    const isEmailExists = this.dataService.users.some((u) => u.correo === this.user.correo);
    const isCedulaExists = this.dataService.users.some((u) => u.cedula === this.user.cedula);
    const isTelefonoExists = this.dataService.users.some((u) => u.telefono === this.user.telefono);
    let validaciontexto = /^[A-Za-z]+$/

    if(this.user.username === '' || this.user.apellido === '' || this.user.password === '' || this.user.telefono === '' || this.user.cedula === '' 
      || this.user.correo === ''){
        Swal.fire({
          title: "Informacion incompleta!",
          text: "Tienes que llenar los campos con informacion valida.",
          icon: "error"
        });
      return;
    }

    else if (isEmailExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Email ya existente",
        icon: "error"
      });      
      return;
    }

    else if (isCedulaExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Cedula ya existente",
        icon: "error"
      });      
      return;
    }

    else if (isTelefonoExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Telefono ya existente",
        icon: "error"
      });
      return;
    }
    else {
      Swal.fire({
        title: "Datos enviados!",
        text: "Gracias por su registro.",
        icon: "success"
      });
    // Si no hay duplicados, agregar usuario
    this.dataService.addUser(this.user);
    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(this.dataService.users));
    this.router.navigate(['/index']);    

    
    }
  }
}
