import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewLessonModule } from 'src/app/new-lesson/new-lesson.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, DemoComponentComponent, HelloWorldComponent, PageNotFoundComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewLessonModule,
    ClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
