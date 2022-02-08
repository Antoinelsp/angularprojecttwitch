import { Component, OnInit } from '@angular/core';
import sampleData from '../../clients.json';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.page.html',
  styleUrls: ['./devis.page.scss'],
})
export class DevisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  datas : any = sampleData;
  
}
