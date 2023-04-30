import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewUserPageComponent } from './new-user-page/new-user-page.component';
import { OldUserPageComponent } from './old-user-page/old-user-page.component';
import { PriceCardsComponent } from './price-cards/price-cards.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AafiSongsComponent } from './aafi-songs/aafi-songs.component';
import { ArmaanSongsComponent } from './armaan-songs/armaan-songs.component';
import { DhillonSongsComponent } from './dhillon-songs/dhillon-songs.component';
import { ShreyaSongsComponent } from './shreya-songs/shreya-songs.component';
import { BillieSongsComponent } from './billie-songs/billie-songs.component';
import { ElleySongsComponent } from './elley-songs/elley-songs.component';

const routes: Routes = [
  {path: '', component:WelcomeScreenComponent},
  // {path: 'welcomescreen', component:WelcomeScreenComponent},
  {path: 'login', component:LogInComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'newUserPage', component: NewUserPageComponent},
  {path: 'oldUserPage', component: OldUserPageComponent},
  {path: 'ForgotPassword', component: ForgotPasswordComponent},
  {path: 'PriceTag', component: PriceCardsComponent},
  {path: 'CommingSoon', component: CommingSoonComponent},
  {path: 'OTP-Page', component: OtpPageComponent},
  {path: 'New-Password', component: NewPasswordComponent},
  {path: 'aafi_Playlist', component: AafiSongsComponent},
  {path: 'armaan_Playlist', component: ArmaanSongsComponent},
  {path: 'dhillon_Playlist', component: DhillonSongsComponent},
  {path: 'shreya_Playlist', component: ShreyaSongsComponent},
  {path: 'billie_Playlist', component: BillieSongsComponent},
  {path: 'elley_Playlist', component: ElleySongsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
