import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IComments } from '../interfaces/IComments';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

 getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComents(): Observable<IComments[]> {
    return this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);

     /*
     ESTE ES UN EJMPL DE MANEJAR EL ERROR POR CONSOLA PERO SI SE QUIEEREN MANEJAR DESDE EL CPONENETE 
  getUserById(id: number): Observable<IUser> | Observable<any> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/usersTTT/${id}`).pipe(catchError( (err) => {
      console.log(err);
      const {status, message} = err;
      //console.error(status);
      //console.warn(message);
      //alert(message);
      return err;
    }));
  */
  }

 

}

