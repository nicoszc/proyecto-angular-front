import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  workExpList: WorkExperience[] = [];

  constructor(private datosPortfolio: ApiService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExp().subscribe((data: any) => {
      console.log(data);
      this.workExpList = data.Experiencia;
    });
  }
}

export interface WorkExperience {
  Rol: string;
  Compania: string;
  Duracion: string;
  Descripcion: string;
}
