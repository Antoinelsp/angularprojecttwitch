import { Component, OnInit } from '@angular/core';
import sampleData from '../../clients.json';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  datas : any = sampleData;
}
