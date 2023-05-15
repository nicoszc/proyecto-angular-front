import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

obtenerDatosExp():Observable<any>{
  return this.http.get("http://127.0.0.1:5000/get_exp")
}

obtenerDatosEdu():Observable<any>{
  return this.http.get("http://127.0.0.1:5000/get_edu")
}

obtenerDatosAba():Observable<any>{
  return this.http.get("http://127.0.0.1:5000/get_about")
}

obtenerDatosSki():Observable<any>{
  return this.http.get("http://127.0.0.1:5000/get_skill")
}
editarDatosSki(num:number):Observable<any>{
  return this.http.get("http://127.0.0.1:5000/upt_skill/"+num.toString())
}

obtenerDatosPro():Observable<any>{
  return this.http.get("http://127.0.0.1:5000/get_project")
}


}
