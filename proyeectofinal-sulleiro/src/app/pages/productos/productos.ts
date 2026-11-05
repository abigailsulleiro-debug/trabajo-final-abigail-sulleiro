import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ProductoCard],
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  // Los productos se guardan en un array para renderizarlos en la vista.
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camiseta 2025 Local',
      descripcion: 'Camiseta oficial del Real Madrid con tejido transpirable y diseño moderno.',
      precio: 89,
      imagen: 'https://www.mezzalacamisetas.com.ar/wp-content/uploads/2025/08/1-3.png',
      categoria: 'Ropa',
    },
    {
      id: 2,
      nombre: 'Gorra Oficial',
      descripcion: 'Gorra con logo del club para completar tu look de fan del Bernabéu.',
      precio: 34,
      imagen: 'https://shop.realmadrid.com/cdn/shop/files/RMCFMH0036-01_5cbf3092-2dd8-4539-a341-f05df5a43550.jpg?v=1767814922',
      categoria: 'Accesorios',
    },
    {
      id: 3,
      nombre: 'Mochila Bernabéu',
      descripcion: 'Mochila práctica y resistente para llevar tus pertenencias con estilo.',
      precio: 59,
      imagen: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/8ed7dfdc585540d386a267d603754d58_9366/JN4150_01_00_standard.jpg',
      categoria: 'Equipaje',
    },
    {
      id: 4,
      nombre: 'Camiseta suplente',
      descripcion: 'Los mejores diseños, tanto dentro como fuera del campo.',
      precio: 90,
      imagen: 'https://www.mezzalacamisetas.com.ar/wp-content/uploads/2025/08/7-2.png',
      categoria: 'Ropa',
    },
  ];

  // El carrito se va actualizando cuando el componente hijo emite el evento.
  carrito: Producto[] = [];

  // Este método recibe el producto del hijo y lo agrega al carrito del padre.
  agregarAlCarrito(producto: Producto): void {
    this.carrito.push(producto);
  }
}

