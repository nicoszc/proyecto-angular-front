import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: Education[] = [];

  constructor(private datosPortfolio: ApiService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEdu().subscribe((data: any) => {
      console.log(data);
      this.educacionList = data.Educacion;
    });
  }
}

export interface Education {
  Instituto: string;
  Curso: string;
  Duracion: string;
  Puntaje: string;
}
