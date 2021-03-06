import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceDataPage } from './device-data.page';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: DeviceDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DeviceDataPage]
})
export class DeviceDataPageModule {}
