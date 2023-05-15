import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectList: Proyectos[] = [];

  constructor(private datosPortfolio: ApiService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPro().subscribe((data: any) => {
      console.log(data);
      this.proyectList = data.Proyectos;
    });
  }
}

export interface Proyectos {
  Titulo: string;
  Tecnologias: string;
  Descripcion: string;
}
