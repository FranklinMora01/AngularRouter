import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { catchError, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  public errorMensaje: string = '';
  constructor(private dataService: DataService,
    private activeRoute: ActivatedRoute){
   
  }
  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(){
    this.activeRoute.paramMap.subscribe( params => {
      console.log(params);
      let id = Number(params.get('id'));
      console.log(id);

      this.dataService.getUserById(id).pipe( catchError( error => {
        //console.log(error);
        const { message } = error;
        this.errorMensaje = message;
        return throwError( () => new Error(message));
      })
      ).subscribe( user => console.log(user));
    })
  }

}
