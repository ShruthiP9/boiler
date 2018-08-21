import { ServService } from './services/serv.service';
import { ShruComponent } from './Components/shru/shru.component';
import { CompComponent } from './Components/comp/comp.component';
import { ModModule } from './mod/mod.module';
import { Example } from './example';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    ShruComponent,
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot([
       {path: 'shru', component: ShruComponent},
    ])
  ],
  providers: [ServService, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

