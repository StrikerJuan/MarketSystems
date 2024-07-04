import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Aquí llamarías al servicio para iniciar sesión del usuario
    // this.apiService.loginUser({ email: this.email, password: this.password }).subscribe(response => {
    //   this.router.navigate(['/articulo/catalogo']);
    // });

    // Temporalmente, redirigimos al catálogo de artículos
    this.router.navigate(['/articulo/catalogo']);
  }
}