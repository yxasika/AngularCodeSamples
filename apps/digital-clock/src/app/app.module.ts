import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './clock/character/character.component';
import { ClockDisplayComponent } from './clock/clock-display/clock-display.component';

@NgModule({
  declarations: [AppComponent, CharacterComponent, ClockDisplayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
