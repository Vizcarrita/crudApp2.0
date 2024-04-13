import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main-auth.component.html',
  styleUrl: './main-auth.component.css'
})
export class MainAuthComponent {

}
