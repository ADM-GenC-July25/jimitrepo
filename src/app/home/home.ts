import { Component, signal } from '@angular/core';
import { BioComponent } from '../bio/bio';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  protected readonly title = signal('Angular is easy');
}
