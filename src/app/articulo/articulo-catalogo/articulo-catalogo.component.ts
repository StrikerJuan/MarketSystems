import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo-catalogo',
  templateUrl: './articulo-catalogo.component.html',
  styleUrl: './articulo-catalogo.component.css'
})
export class ArticuloCatalogoComponent implements OnInit{

  // Aquí deberías cargar los artículos desde la API
  articulos = [ ];

  constructor(){}

  ngOnInit(): void {
    // Aquí deberías llamar al servicio para obtener los artículos
    // this.apiService.getArticulos().subscribe(data => {
    //   this.articulos = data;
    // });
  }
}
