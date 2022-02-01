import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dasboard',
    loadChildren: () => import('./dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
  {
    path: 'streamer',
    loadChildren: () => import('./streamer/streamer.module').then( m => m.StreamerPageModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
  {
    path: 'devis',
    loadChildren: () => import('./devis/devis.module').then( m => m.DevisPageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('./facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'categorie',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
