import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, User } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  currentUser: User | null = null;
  originalUser: User | null = null;

  constructor(private router: Router, private dataService: DataService) {
    this.initializeUserData(); 
  }
  
  ngOnInit() {
    this.initializeUserData();
  }

  private initializeUserData() {
    this.currentUser = this.dataService.currentUser;
    this.originalUser = this.currentUser ? { ...this.currentUser } : null;
  }

  ngOnDestroy() {
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  navigateToEmpleo() {
    this.router.navigate(['/empleo']);
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
    this.dataService.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/index']);
  }


  updateUserInfo() {
    // Realiza las mismas validaciones que en el registro
    const isEmailExists = this.dataService.users.some((u) => u.correo === this.currentUser?.correo && u.correo !== this.originalUser?.correo);
    const isCedulaExists = this.dataService.users.some((u) => u.cedula === this.currentUser?.cedula && u.cedula !== this.originalUser?.cedula);
    const isTelefonoExists = this.dataService.users.some((u) => u.telefono === this.currentUser?.telefono && u.telefono !== this.originalUser?.telefono);
    let validaciontexto = /^[A-Za-z]+$/;

    if (
      !this.currentUser ||
      this.currentUser.username === '' ||
      this.currentUser.apellido === '' ||
      this.currentUser.password === '' ||
      this.currentUser.telefono === '' ||
      this.currentUser.cedula === '' ||
      this.currentUser.correo === '' ||
      this.currentUser.password === ''
    ) {
      Swal.fire({
        title: "Informacion incompleta!",
        text: "Tienes que llenar los campos con informacion valida.",
        icon: "error"
      });
      return;
    } else if (isEmailExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Email ya existente",
        icon: "error"
      });
      return;
    } else if (isCedulaExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Cedula ya existente",
        icon: "error"
      });
      return;
    } else if (isTelefonoExists) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Telefono ya existente",
        icon: "error"
      });
      return;
    } else if (!validaciontexto.test(this.currentUser.username) || !validaciontexto.test(this.currentUser.apellido)) {
      Swal.fire({
        title: "Hubo un problema!",
        text: "Nombre de usuario y apellido solo deben contener letras.",
        icon: "error"
      });
      return;
    } else {
      Swal.fire({
        title: "Datos actualizados!",
        text: "La información ha sido actualizada.",
        icon: "success"
      });
      // Guarda los cambios en el servicio y en localStorage
      this.dataService.currentUser = this.currentUser;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }
}
