import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildDetailPage } from './build-detail';

@NgModule({
  declarations: [
    BuildDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildDetailPage),
  ],
})
export class BuildDetailPageModule {}
