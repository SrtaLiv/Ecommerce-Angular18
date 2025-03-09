import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, MousePointerClick } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule], // Remove MousePointerClick from imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly MousePointerClick = MousePointerClick;
}
