import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {HttpModule}           from '@angular/http';
import {ReactiveFormsModule}  from '@angular/forms';

import {AppComponent}         from './app.component';
import {SinglePageScrolling}  from 'modules/single-page-scrolling/single-page-scrolling';
import {NavMenu}              from 'modules/nav-menu/nav-menu';
import {SpsIntroSection}      from 'modules/sps-intro-section/sps-intro-section';
import {SpsAboutSection}      from 'modules/sps-about-section/sps-about-section';
import {SpsEventCalendar}     from 'modules/sps-event-calendar/sps-event-calendar';
import {SpsMembership}        from 'modules/sps-membership/sps-membership';
import {SpsContactSection}    from 'modules/sps-contact-section/sps-contact-section';
import {SpsFooter}            from 'modules/sps-footer/sps-footer';
import {ImgGallery}           from 'modules/img-gallery/img-gallery';
import {Filter}               from 'modules/filter-pipe/filter-pipe';

@NgModule({
  imports:      [BrowserModule, HttpModule, ReactiveFormsModule],
  exports:      [SinglePageScrolling, NavMenu, SpsIntroSection, SpsAboutSection, SpsEventCalendar, ImgGallery, SpsMembership, SpsContactSection, Filter, SpsFooter],
  declarations: [AppComponent, SinglePageScrolling, NavMenu, SpsIntroSection, SpsAboutSection, SpsEventCalendar, ImgGallery, SpsMembership, SpsContactSection, Filter, SpsFooter],
  bootstrap:    [AppComponent]
})

export class AppModule { }