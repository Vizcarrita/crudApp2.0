import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  public tabsItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path?.includes(':'))
    .filter( route => !route.path?.includes('cart'))

}
