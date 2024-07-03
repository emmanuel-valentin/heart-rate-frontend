import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  public items: MenuItem[] = [
    {
      label: 'Heart Rate Monitor',
      icon: PrimeIcons.HEART,
    }
  ]
}
