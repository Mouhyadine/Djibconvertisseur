import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distances',
  templateUrl: './distances.component.html',
  styleUrls: ['./distances.component.css']
})
export class DistancesComponent implements OnInit {
  resultat = '';
  onEnter(resultat: Number) { this.resultat = resultat * 3.2808 ; }

  constructor() { }

  ngOnInit() {
  }

}
