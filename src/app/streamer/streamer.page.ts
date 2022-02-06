import { Component, OnInit } from '@angular/core';
import sampleData from '../../clients.json';

@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.page.html',
  styleUrls: ['./streamer.page.scss'],
})
export class StreamerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  datas : any = sampleData;
}
