import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetrieveUsersPage } from './retrieve-users';

@NgModule({
  declarations: [
    RetrieveUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(RetrieveUsersPage),
  ],
})
export class RetrieveUsersPageModule {}
