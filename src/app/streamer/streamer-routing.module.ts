import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamerPage } from './streamer.page';

const routes: Routes = [
  {
    path: '',
    component: StreamerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamerPageRoutingModule {}
