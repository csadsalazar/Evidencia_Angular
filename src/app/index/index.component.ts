import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  correo: string = ''; 
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }

  login() {
    const isAuthenticated = this.dataService.authenticate(this.correo, this.password);
    if (isAuthenticated) {
      Swal.fire({
        title: "Bienvenido, Usuario!",
        text: "Usuario",
        icon: "success"
      });
      this.router.navigate(['/dashboard']);
    } else if(this.correo === "admin@admin.com" && this.password === "12345"){
        Swal.fire({
          title: "Bienvenido, Administrador!",
          text: "Admin",
          icon: "success"
        }); 
      this.router.navigate(['/admin']);
    }
      else{
        Swal.fire({
          title: "Denegado, cachon!",
          text: "UAN",
          icon: "error"
        }); 
      }
  }
}
