import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBannerComponent } from './header-banner/header-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderBannerComponent],
  exports: [HeaderBannerComponent]
})
export class SharedModule { }
