import { Component, OnInit } from '@angular/core';
import sampleData from '../../clients.json';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.page.html',
  styleUrls: ['./entreprise.page.scss'],
})
export class EntreprisePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  datas : any = sampleData;
}
