import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhotos } from '../interfaces/IPhotos';

@Injectable({
  providedIn: 'root'
})
export class FotografiaServiceService {

  constructor(private http: HttpClient) { }

  
  getFotosDos(page: number = 1, limit: number = 20): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
  }

  getfoto(id: number): Observable<IPhotos>{
    return this.http.get<IPhotos>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

}
