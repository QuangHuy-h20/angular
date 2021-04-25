import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewLessonModule } from 'src/app/new-lesson/new-lesson.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewLessonModule,
    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
