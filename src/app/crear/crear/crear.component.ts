import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxiService } from 'src/app/taxi/taxi.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nombre = '';
  barrio = '';
  wpp = '';
  constructor(private router: Router,
    private taxisS: TaxiService) { }

  ngOnInit() {
  }

  crearTaxi() {
    this.taxisS.postTaxis(this.nombre,this.barrio,this.wpp).subscribe((d) => {
      console.log(d);
    }, (e) => {
      console.log(e);
      
    });
    this.router.navigate(['/'])

  }

}
