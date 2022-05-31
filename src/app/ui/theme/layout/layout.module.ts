import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './components/footer/footer.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
  declarations: [LayoutComponent, MainComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
