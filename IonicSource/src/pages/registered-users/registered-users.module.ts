import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteredUsersPage } from './registered-users';

@NgModule({
  declarations: [
    RegisteredUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisteredUsersPage),
  ],
})
export class RegisteredUsersPageModule {}
