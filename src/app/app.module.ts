import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OffCampusComponent } from './off-campus/off-campus.component';
import { RouterModule } from '@angular/router';
import { CenterComponent } from './header/center/center.component';
import { NavigationComponent } from './header/center/navigation/navigation.component';
import { SearchComponent } from './header/center/search/search.component';
import { NavComponent } from './nav/nav.component';
import { IconsComponent } from './nav/icons/icons.component';
import { IconComponent } from './nav/icons/icon/icon.component';
import { WrapperComponent } from './shared/UI/wrapper/wrapper.component';
import { CarouselComponent } from './shared/UI/carousel/carousel.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './properties/properties.component';
import { CardComponent } from './shared/UI/card/card.component';
import { BackdropComponent } from './shared/UI/backdrop/backdrop.component';
import { ModalComponent } from './shared/UI/modal/modal.component';
import { PropertiesFilterComponent } from './properties/properties-filter/properties-filter.component';
import { OffCampusFilterComponent } from './off-campus/off-campus-filter/off-campus-filter.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyImageWrapperComponent } from './shared/UI/property-image-wrapper/property-image-wrapper.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { DetailImageGridComponent } from './shared/UI/detail-image-grid/detail-image-grid.component';
import { HomeComponent } from './home/home.component';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffCampusComponent,
    CenterComponent,
    NavigationComponent,
    SearchComponent,
    NavComponent,
    IconsComponent,
    IconComponent,
    WrapperComponent,
    CarouselComponent,
    AuctionsComponent,
    PropertiesComponent,
    CardComponent,
    BackdropComponent,
    ModalComponent,
    PropertiesFilterComponent,
    OffCampusFilterComponent,
    PropertyDetailComponent,
    PropertyImageWrapperComponent,
    DetailImageGridComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
