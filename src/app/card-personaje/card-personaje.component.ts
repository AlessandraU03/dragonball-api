import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css'],
})
export class CardPersonajeComponent implements OnInit {
  characters: any[] = [];
  selectedCharacterId: number | null = null;
  selectedForTransformations: number | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe(
      (response: any) => {
        this.characters = response.items;
      },
      (error) => {
        console.error('Error al cargar personajes:', error);
      }
    );
  }

  openPlanetModal(characterId: number): void {
    this.selectedCharacterId = characterId;
  }

  openTransformationsModal(characterId: number): void {
    this.selectedForTransformations = characterId;
  }

  closePlanetModal(): void {
    this.selectedCharacterId = null;
  }

  closeTransformationsModal(): void {
    this.selectedForTransformations = null;
  }
}
