import { Component, Input, OnInit } from '@angular/core';
import { LucideAngularModule, MousePointerClick, Truck, RefreshCw, IdCard, MoveRight } from 'lucide-angular';
import { promos } from '../models/promos';
import { Promo } from '../models/promos';

const iconMap = {
  'Truck': Truck,
  'RefreshCw': RefreshCw,
  'IdCard': IdCard,
  'MoveRight': MoveRight
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule], // Remove MousePointerClick from imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  template: `
  <!-- ENVIO GRATIS Y NEWSLETTER -->
      @for (promo of promosList; track $index) {
          <h4>{{promo.title}}</h4>
          <p>{{promo.description}}</p>
          <lucide-angular [img]="getIcon(promo.icon)" class="my-icon"></lucide-angular>
      }
`
})

export class HomeComponent implements OnInit {
  readonly MousePointerClick = MousePointerClick;
  readonly Truck = Truck;
  readonly RefreshCw = RefreshCw;
  readonly IdCard = IdCard;
  readonly MoveRight = MoveRight;

  promosList = promos;

  // Método para obtener el ícono dinámicamente
  getIcon(iconName: string) {
    return iconMap[iconName as keyof typeof iconMap];
  }

  // @Input() icon = '';

  // promosList: Promo[] = [];

  ngOnInit(): void {
    console.log(promos);
    this.promosList = promos;
  }
}
