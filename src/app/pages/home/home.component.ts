import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('llegua aqui');
    this.dataService.getPost().subscribe((data: IPost[]) => console.log(data));
  }

}
