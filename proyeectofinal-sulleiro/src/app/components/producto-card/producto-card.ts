import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  // El padre envía un producto completo al componente reutilizable.
  @Input({ required: true }) producto!: Producto;

  // El hijo informa al padre que el usuario quiere agregar este producto.
  @Output() agregar = new EventEmitter<Producto>();

  // Emite el producto para que el componente padre lo maneje.
  agregarAlCarrito(): void {
    this.agregar.emit(this.producto);
  }
}
