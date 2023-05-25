import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-inici-gerard-valldosera',
  templateUrl: './inici-gerard-valldosera.component.html',
  styleUrls: ['./inici-gerard-valldosera.component.css']
})
export class IniciGerardValldoseraComponent {
  NomIdBerry: string;
  Dolca: boolean;
  Fotoberry: string;
  Ruta: string = '';

  constructor(private router: Router) {
  }

  BuscarBerry() {
    this.Dolca = false;
    this.Fotoberry = '';

    axios
      .get(`https://pokeapi.co/api/v2/berry/${this.NomIdBerry.toLowerCase()}`)
      .then(response => {
        const berryData = response.data;
        const flavorData = berryData.flavors.find(
          (flavor: any) => flavor.flavor.name === 'sweet'
        );

        if (flavorData && flavorData.potency > 0) {
          this.Dolca = true;
        }

        this.Fotoberry = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berryData.item.name}.png`;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
      });
  }

  onSubmit() {

    this.router.navigate(['/infogerardvalldosera', this.Ruta]);


  }
 }
