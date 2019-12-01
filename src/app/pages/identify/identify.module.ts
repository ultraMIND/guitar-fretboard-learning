import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { FretboardModule } from 'src/app/shared/fretboard/fretboard.module';

import { IdentifyPageRoutingModule } from './identify-routing.module';
import { IdentifyPage } from './identify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IdentifyPageRoutingModule,
    FretboardModule,
  ],
  declarations: [IdentifyPage],
  providers: [UtilsService, ToastController],
})
export class IdentifyPageModule {}
