import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'a',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  title = 'brain';
}
