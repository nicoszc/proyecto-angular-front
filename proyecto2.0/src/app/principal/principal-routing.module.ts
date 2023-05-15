import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PaginaCuatrocientoscuatroComponent } from './paginas/pagina-cuatrocientoscuatro/pagina-cuatrocientoscuatro.component';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path:"pagina-cuatrocientoscuatro", component: PaginaCuatrocientoscuatroComponent },
      {path:"pagina-login", component: PaginaLoginComponent},
      {path:"pagina-principal", component: PaginaPrincipalComponent } ,   
      { path: '**', redirectTo: 'pagina-principal' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class PrincipalRoutingModule { }
