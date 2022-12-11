import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    errorMsg = null;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
    ) { }


    ngOnInit() {
        this.pokemonForm = this.formBuilder.group({
            name: [null, Validators.required]
        });

    }


    onSubmit() {
        this.http.get(`${this.apiUrl}/pokemon/${this.pokemonForm.value.name}`)
            .subscribe((item: PokemonObj) => {
                if (item) {
                    const PokemonNameList = this.pokemonList
                        .map(item => item.data.name_uq)
                        .filter(name => name === item.data.name_uq)
                    const checkExistentPokemon = PokemonNameList.indexOf(item.data.name_uq)
                    if (checkExistentPokemon) {
                        this.pokemonList.push(item)
                        return this.pokemonForm.reset()
                    }
                }
            }, error => {
                this.errorMsg = error.message;
                this.pokemonForm.controls['name'].setErrors({
                    noPokemon: true
                })
            })
    }
}
