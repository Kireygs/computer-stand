import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputersDetailPage } from './computers-detail';

@NgModule({
  declarations: [
    ComputersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputersDetailPage),
  ],
})
export class ComputersDetailPageModule {}
