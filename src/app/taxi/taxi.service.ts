import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded' });
  optionss = { headers: this.headers };

  constructor(protected http: HttpClient) { }

  getTaxis () {
    return this.http.get('http://localhost/restapi/v1/auto'); 
  }

  postTaxis(name, barrio, wpp) {
    return this.http.post('http://localhost/restapi/v1/auto', '&name_persona='+name+'&barrio='+barrio+'&wpp=57'+wpp, this.optionss);
  }

  deleteTaxis(id) {
    return this.http.delete('http://localhost/restapi/v1/auto/2', this.optionss);
  }
}
