import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  aboutList:About[] = [];

  constructor(private datosPortfolio:ApiService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosAba().subscribe((data: any) => {
      console.log(data);
      this.aboutList = data.About;
    });

  }
}

export interface About {
  Nombre: string;
  Edad: number;
  Nacionalidad: string;
  Intereses: string;
  Descripcion: string;
}

