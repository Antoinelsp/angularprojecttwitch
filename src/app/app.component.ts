import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard' },
    { title: 'Streamer', url: '/folder/streamer' },
    { title: 'Entreprise', url: '/folder/entreprise' },
    { title: 'Devis', url: '/folder/devis' },
    { title: 'Facture', url: '/folder/facture' },
    { title: 'Catégorie', url: '/folder/categorie'},
  ];
}
