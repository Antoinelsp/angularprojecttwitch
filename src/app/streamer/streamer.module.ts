import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamerPageRoutingModule } from './streamer-routing.module';

import { StreamerPage } from './streamer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamerPageRoutingModule
  ],
  declarations: [StreamerPage]
})
export class StreamerPageModule {}
