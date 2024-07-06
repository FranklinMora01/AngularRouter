import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContenedorFotografiasComponent } from './pages/contenedor-fotografias/contenedor-fotografias.component';
import { FotoComponent } from './pages/foto/foto.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'user/:id', component: UserComponent },
    { path: 'users', component: UsersComponent },
    { path: 'photos', component: ContenedorFotografiasComponent },
    { path: 'foto/:id', component: FotoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
