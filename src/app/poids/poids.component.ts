import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {
  resultat = '';
  onEnter(resultat: Number) { this.resultat = resultat * 2.2046  ; }
  constructor() { }

  ngOnInit() {
  }

}
