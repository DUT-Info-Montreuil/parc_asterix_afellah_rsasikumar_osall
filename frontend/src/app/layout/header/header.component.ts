import { Component } from '@angular/core';
import { LogoTitleComponent } from './logo-title/logo-title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  imports: [LogoTitleComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
