import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  title = 'angularrouter';

  navBarOpts = [
    { path: '/home', name: 'Home'},
    { path: '/users', name: 'Users'},
    { path: '/photos', name: 'Photos'}
  ];

}
