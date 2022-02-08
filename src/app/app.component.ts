import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Dashboard', url: '/dasboard' },
    { title: 'Streamer', url: '/streamer' },
    { title: 'Entreprise', url: '/entreprise' },
    { title: 'Devis', url: '/devis' },
    { title: 'Facture', url: '/facture' },
    { title: 'Catégorie', url: '/categorie'},
  ];

  constructor() { }

  ngOnInit() {
  }

  homenter : boolean = true ;

  onActivate(event : any){
   if (event.constructor.name == "HomepageComponent"){
    this.homenter = false;
   }
  
  }

}
