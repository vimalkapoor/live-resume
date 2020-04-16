import { NgModule }     from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeBackgroundComponent } from './welcome-background/welcome-background.component';

@NgModule({
  declarations: [ WelcomeComponent, WelcomeBackgroundComponent ],
  exports: [ WelcomeComponent ]
})

export class WelcomeModule { }