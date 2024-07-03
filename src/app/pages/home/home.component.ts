import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IComments } from '../../interfaces/IComments';
import { ButtonComponent } from '../../components/button/button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public coments: IComments[] = [];
  public posts: IPost[] = [];
  public comentariosFiltradorPorPost: IComments [] = [];

  opcionesBtnEstado = {
    color: 'btn btn-success',
    titleBtn: 'Mostrar'
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPost().subscribe(data => this.posts = data);
    this.dataService.getComents().subscribe( (comentarios) => this.coments = comentarios);
  }

  obtenerComentariosPorId(id: number) {
    
    this.opcionesBtnEstado.titleBtn == 'Mostrar' ? this.comentariosFiltradorPorPost = this.coments.filter( comentarios => comentarios.postId == id) : this.comentariosFiltradorPorPost = [];
    this.opcionesBtnEstado.titleBtn = this.opcionesBtnEstado.titleBtn == 'Mostrar' ? "Ocultar" : "Mostrar";
    this.opcionesBtnEstado.color = this.opcionesBtnEstado.color == 'btn btn-success' ? "btn btn-secondary" : "btn btn-success";
    console.log(this.comentariosFiltradorPorPost);

  };

}
