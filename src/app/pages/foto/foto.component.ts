import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FotografiaServiceService } from '../../services/fotografia-service.service';
import { IPhotos } from '../../interfaces/IPhotos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.scss'
})
export class FotoComponent implements OnInit{

  public photo!: IPhotos;
  public errorMensaje: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private fotografiaService: FotografiaServiceService
  ) {}

  ngOnInit(): void {
    this.GetFotoById();  
  }

 GetFotoById(){
  this.activeRoute.paramMap.subscribe( param => {
    let id = Number(param.get('id'));

    //this.fotografiaService.getfoto(id).subscribe( photoId => this.photo = photoId);
    this.fotografiaService.getfoto(id).subscribe( 
      (photoId) => {
        this.photo = photoId;
        //console.log('Foto recibida:', this.photo)
      },
      (error) => {
        const { message } = error;
        this.errorMensaje = message;
        console.error('Error al obtener la foto:', message);
        
      }
    );

  });
 }


}
