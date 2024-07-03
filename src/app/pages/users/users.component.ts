import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IUser } from '../../interfaces/IUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  public usuarios: IUser [] = [];
  constructor(private dataService: DataService){

  }
  ngOnInit(): void {
    this.dataService.getUsers().subscribe( users => this.usuarios = users);
  }

}
