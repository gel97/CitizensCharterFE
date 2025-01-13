import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, HeaderComponent , SidebarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
