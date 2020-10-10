import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css']
})
export class ConvertisseurComponent implements OnInit {
  test =500;
  constructor() { }

  ngOnInit(): void {
  }
  processRequest(msg) {
    alert(msg);

  }

}
