import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IComments } from '../../interfaces/IComments';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public coments: IComments[] = [];
  public posts: IPost[] = [];
  public comentariosFiltradorPorPost: IComments [] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPost().subscribe(data => this.posts = data);
    this.dataService.getComents().subscribe( (comentarios) => this.coments = comentarios);
  }

  obtenerComentariosPorId(id: number) {
    this.comentariosFiltradorPorPost = this.coments.filter( comentarios => comentarios.postId == id)
    console.log(this.comentariosFiltradorPorPost);
  };

}
