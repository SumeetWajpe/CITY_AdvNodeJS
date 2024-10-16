import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListofcoursesComponent } from './listofcourses/listofcourses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListofcoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'apolloclient_angular';
}
