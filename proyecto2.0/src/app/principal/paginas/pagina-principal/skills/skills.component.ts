import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList: Skills[] = [];

  constructor(private datosPortfolio: ApiService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosSki().subscribe((data: any) => {
      console.log(data);
      this.skillList = data.Habilidades;
    });
  }
}

export interface Skills {
  Nombre: string;
  Nivel: string;
  Rango: number;
}

