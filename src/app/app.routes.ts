import { Routes } from '@angular/router';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClienteDetailComponent } from './componets/cliente-detail/cliente-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'nova-rota', component: RotasComponent},
    {path: 'cliente/:id', component: ClienteDetailComponent},

];
