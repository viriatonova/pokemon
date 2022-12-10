import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonFormComponent } from 'src/app/components/pokemon-form/pokemon-form.component';

@NgModule({
    declarations: [
        AppComponent,
        PokemonFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

