import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{PaginaPrincipalComponent}from "./principal/paginas/pagina-principal/pagina-principal.component"
import{PaginaCuatrocientoscuatroComponent}from "./principal/paginas/pagina-cuatrocientoscuatro/pagina-cuatrocientoscuatro.component"

const routes: Routes = [
  {
    path:"", redirectTo:"Principal", pathMatch:"full"},
    {
      path:"principal", component:PaginaPrincipalComponent
    },


  {
    path:"principal",
    loadChildren:() => import("./principal/principal.module").then(m => m.PrincipalModule)
  },
  { path: '**', redirectTo: 'PaginaCuatrocientoscuatro' },
  {path:"PaginaCuatrocientoscuatro", component:PaginaCuatrocientoscuatroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
