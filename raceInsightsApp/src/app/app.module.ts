import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        RaceDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule // required animations module

    ],
    providers: [        
    provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }