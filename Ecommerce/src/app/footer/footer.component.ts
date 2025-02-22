import { Component } from '@angular/core';

import { LucideAngularModule, Truck, CreditCard, RefreshCw } from 'lucide-angular';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly Truck = Truck;
  readonly CreditCard = CreditCard;
  readonly RefreshCw = RefreshCw;

}

