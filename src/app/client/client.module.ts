import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ClientComponent, AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
