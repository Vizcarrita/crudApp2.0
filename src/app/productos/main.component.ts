import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { TabsComponent } from '../shared/tabs/tabs.component';
import { ProfileSettingComponent } from '../components/profile/profile-setting/profile-setting.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ProfileSettingComponent, TabsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
