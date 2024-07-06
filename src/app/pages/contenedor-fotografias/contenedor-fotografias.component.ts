import { Component, OnInit } from '@angular/core';
import { FotografiaServiceService } from '../../services/fotografia-service.service';
import { IPhotos } from '../../interfaces/IPhotos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-contenedor-fotografias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contenedor-fotografias.component.html',
  styleUrl: './contenedor-fotografias.component.scss',
})
export class ContenedorFotografiasComponent implements OnInit{

  private modal: Modal | undefined;
  
  public fotos: IPhotos [] = [];
  public currentPage = 1;
  public itemsPerPage = 20;
  constructor(private fotografiaService: FotografiaServiceService) {

  }

  ngOnInit(): void {
    this.loadPhotos();

  }

  loadPhotos(): void {
    this.fotografiaService.getFotosDos(this.currentPage, this.itemsPerPage).subscribe(
      newFotos => {
        this.fotos = [...this.fotos, ...newFotos];
        //console.log(this.fotos);
      }
    );
  }

  loadMore(): void {
    this.currentPage++;
    this.loadPhotos();
  }

  

}
