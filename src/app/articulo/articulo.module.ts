import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ArticuloCatalogoComponent } from './articulo-catalogo/articulo-catalogo.component';


const routes: Routes = [
  { path: 'catalogo', component: ArticuloCatalogoComponent },
];

@NgModule({
  declarations: [
    ArticuloCatalogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
  ]
})
export class ArticuloModule { }
