import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderBannerComponent, FooterComponent],
  exports: [HeaderBannerComponent, FooterComponent]
})
export class SharedModule { }
