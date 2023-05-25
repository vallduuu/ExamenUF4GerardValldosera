import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciGerardValldoseraComponent } from './inici-gerard-valldosera/inici-gerard-valldosera.component';
import {FormsModule} from "@angular/forms";
import { InfogerardvalldoseraComponent } from './infogerardvalldosera/infogerardvalldosera.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciGerardValldoseraComponent,
    InfogerardvalldoseraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
