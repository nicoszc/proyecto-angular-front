import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';

import { PaginaCuatrocientoscuatroComponent } from './paginas/pagina-cuatrocientoscuatro/pagina-cuatrocientoscuatro.component';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    PaginaCuatrocientoscuatroComponent,
    PaginaLoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
