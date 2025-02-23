import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  date:Date=new Date();
address:String="";
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpeg", status:"Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpeg", status:"Vendu"},
    {id:4,"name": "El Anber","address":"inconnu","image":"../../assets/images/R4.jpeg", status: "En Construction"}
    ];

    showLocation(residence: Residence): void {
      if (residence.address === 'inconnu') {
        alert(`L'adresse de la résidence ${residence.name} est inconnue.`);
      } else {
        alert(`Adresse: ${residence.address}`);
      }
    }
    favorites: Residence[] = [];

addToFavorites(residence: Residence): void {
  if (!this.isFavorite(residence)) {
    this.favorites.push(residence);
    alert(`${residence.name} a été ajoutée aux favoris.`);
  }
}

isFavorite(residence: Residence): boolean {
  return this.favorites.includes(residence);
}

searchText: string = '';

filteredResidences(): Residence[] {
  return this.listResidences.filter(residence =>
    residence.address.toLowerCase().includes(this.searchText.toLowerCase())
  );
}


    
}
