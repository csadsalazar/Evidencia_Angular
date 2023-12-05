import { Injectable } from '@angular/core';

export interface User {
  username: string;
  apellido: string;
  password: string;
  cedula: string;
  telefono: string;
  correo: string;
}

export interface Hoja {
  username: string;
  apellido: string;
  cedula: string;
  telefono: string;
  correo: string;
  direccion: string;
  descripcion: string;
}

export interface OfertaTrabajo {
  nombre: string;
  empresa: string;
  puesto: string;
  sueldo: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ofertaSeleccionada: OfertaTrabajo | null = null;
  users: User[] = [];
  currentUser: User | null = null;
  ofertasTrabajo: OfertaTrabajo[] = [];
  hojas: Hoja[] = [];


  constructor() {
    this.loadUsersFromLocalStorage();
    this.loadOfertasFromLocalStorage();
    this.loadHojasFromLocalStorage();
  }

  ngOnDestroy() {
    this.saveUsersToLocalStorage();
    this.saveOfertasToLocalStorage();
    this.saveHojasToLocalStorage();
  }

  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  private loadOfertasFromLocalStorage() {
    const storedOfertas = localStorage.getItem('ofertasTrabajo');
    if (storedOfertas) {
      this.ofertasTrabajo = JSON.parse(storedOfertas);
    }
  }

  private loadHojasFromLocalStorage() {
    const storedHojas = localStorage.getItem('hojas');
    if (storedHojas) {
      this.hojas = JSON.parse(storedHojas);
    }
  }


  addUser(user: User) {
    this.users.push(user);
    this.saveUsersToLocalStorage();
  }

  
  authenticate(correo: string, password: string): boolean {
    const user = this.users.find((u) => u.correo === correo && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  agregarOferta(oferta: OfertaTrabajo) {
    this.ofertasTrabajo.push(oferta);
    this.saveOfertasToLocalStorage();
  }

  agregarHoja(hoja: Hoja) {
    this.hojas.push(hoja);
    this.saveHojasToLocalStorage();
  }

  setOfertaSeleccionada(oferta: OfertaTrabajo) {
    this.ofertaSeleccionada = oferta;
  }

  getOfertaSeleccionada(): OfertaTrabajo | null {
    return this.ofertaSeleccionada;
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private saveHojasToLocalStorage() {
    localStorage.setItem('hojas', JSON.stringify(this.hojas));
  }

  private saveOfertasToLocalStorage() {
    localStorage.setItem('ofertasTrabajo', JSON.stringify(this.ofertasTrabajo));
  }
}
