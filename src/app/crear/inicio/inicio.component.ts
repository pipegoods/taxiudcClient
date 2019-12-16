import { Component, OnInit } from '@angular/core';
import { TaxiService } from 'src/app/taxi/taxi.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  taxis: any[] = [];

  constructor (
    protected taxisS: TaxiService
  ) {}

  ngOnInit () {
    this.taxisS.getTaxis().subscribe((data) => {
      this.taxis = data['autos'];
    }, (e) => {
      console.log(e);
    });
  }
}
