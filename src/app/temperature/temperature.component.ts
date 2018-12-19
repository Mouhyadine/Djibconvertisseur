import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  resultat = '';
  onEnter(resultat: Number) { this.resultat = resultat * 9/5 + 32 ; }


  constructor() { }

  ngOnInit() {
  }

}
