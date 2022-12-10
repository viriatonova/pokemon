import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent {

    apiUrl: string;

    constructor() {
      this.apiUrl = environment.APIURL
    }
}
