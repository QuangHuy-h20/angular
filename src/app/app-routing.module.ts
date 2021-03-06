import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { DayOneComponent } from './new-lesson/day-one/day-one.component';
import { DayThreeComponent } from './new-lesson/day-three/day-three.component';
import { DayTwoComponent } from './new-lesson/day-two/day-two.component';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './provider/login/login.component';
import { ProviderModule } from './provider/provider.module';
import { SignUpComponent } from './provider/sign-up/sign-up.component';
const routes: Routes = [
  {
    path: 'lesson1',
    component: DayOneComponent,
  },
  {
    path: 'lesson2',
    component: DayTwoComponent,
  },
  {
    path: 'lesson3',
    component: DayThreeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    component: NewLessonComponent,
  },

  {
    path: 'admin',
    loadChildren: () => AdminModule,
  },
  {
    path: 'client',
    loadChildren: () => ClientModule,
  },
  {
    path: 'error404',
    component: PageNotFoundComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '/error404',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProviderModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
