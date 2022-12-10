import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Pokemon {
    id_px: number
    name_uq: string
    photo_uq: string
}
export interface PokemonObj {
    data: Pokemon
}

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {

    pokemonForm: FormGroup;
    apiUrl = "http://127.0.0.1:9100/api/v1"
    pokemonList = []

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
    ) { }


    ngOnInit() {
        this.pokemonForm = this.formBuilder.group({
            name: [null]
        });
    }

    onSubmit() {
        this.http.get(`${this.apiUrl}/pokemon/${this.pokemonForm.value.name}`)
        .subscribe((item: PokemonObj) => {
            if(!item.data.name_uq) return "Sem Pokemon"
            const PokemonNameList = this.pokemonList
                .map(item => item.data.name_uq)
                .filter(name => name === item.data.name_uq)
            const checkExistentPokemon = PokemonNameList.indexOf(item.data.name_uq)
            if (checkExistentPokemon) return this.pokemonList.push(item)
            return "Sem Pokemon"
        })
    }
}
