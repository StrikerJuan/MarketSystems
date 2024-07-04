import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Aquí llamarías al servicio para registrar el usuario
    // this.apiService.registerUser({ email: this.email, password: this.password }).subscribe(response => {
    //   this.router.navigate(['/usuario/login']);
    // });

    // Temporalmente, redirigimos al login
    this.router.navigate(['/usuario/login']);
  }
}
