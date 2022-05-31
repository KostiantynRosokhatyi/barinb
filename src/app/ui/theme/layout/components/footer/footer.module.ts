import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer.component';
import { IconsModule } from '../../../../icons/icons.module';

@NgModule({
  imports: [IconsModule, MatButtonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
