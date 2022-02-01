import { Component, OnInit } from '@angular/core';
import sampleData from '../../clients.json';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  datas : any = sampleData;
  
}
