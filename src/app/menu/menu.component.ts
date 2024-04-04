import { Component } from '@angular/core';
import { APPROUTES } from '../app-routing.module';


@Component({
  selector: 'fbc-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isCollapsed = true;
  routes = APPROUTES;

  constructor() {}
}
