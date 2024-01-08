import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../../models/producto.model';
import { ProductosService } from '../../../services/productos.service';
import { ImagenPipe } from "../../../pipes/imagen.pipe";

@Component({
    selector: 'app-listado',
    standalone: true,
    templateUrl: './listado.component.html',
    styleUrl: './listado.component.css',
    imports: [CommonModule, ImagenPipe]
})
export default class ListadoComponent implements OnInit {

  totalProductos: number = 0;
  productos: Producto[] = [];
  productosTemp: Producto[] = [];
  desde: number = 0;

  constructor(private productosService: ProductosService) { }

  ngOnInit(){
    this.cargarProductos();
  }

  cargarProductos(){
    this.productosService.getProductos( this.desde )
    .subscribe(({ total,producto }) => {
      this.totalProductos = total;
      this.productos = producto; 
      this.productosTemp = producto;
    })
  }

  cambiarPagina( valor: number ){
    this.desde += valor;

    if( this.desde < 0 ){
      this.desde = 0;
    }else if ( this.desde >= this.totalProductos ){
      this.desde -= valor;
    }
    this.cargarProductos()
  }

}
