import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  template: `
    <p>{{ announcement }}</p>
    <button (click)="transformText()">Abracadabra!</button>
  `,
})
export class ProductComponent {
  announcement = 'Abierto'

  transformText(){
    // this.text = this.text.toUpperCase();
    this.announcement = 'Cerrado'
  }
  
  productList = [
    {
      name: 'Coca-Cola',
      price: 100,
      quantity: 4
    },
    {
      name: 'Fanta',
      price: 120,
      quantity: 5

    },
    {
      name: 'Sprite',
      price: 125,
      quantity: 9
    },
    {
      name: 'Pomelo',
      price: 60,
      quantity: 2
    }
  ]
}
