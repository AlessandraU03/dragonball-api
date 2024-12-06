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
  editingKiCharacter: any | null = null; // Para manejar el personaje que está siendo editado

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe(
      (response: any) => {
        this.characters = response.items;

        // Cargar valores adicionales y gestionar defaults
        this.characters.forEach((character) => {
          // Cargar Ki desde localStorage si existe
          const storedKi = localStorage.getItem(`ki_${character.id}`);
          if (storedKi) {
            character.ki = parseInt(storedKi, 10);
          }

          // Asignar valores predeterminados si no están disponibles
          character.maxKi = character.maxKi || 'N/A';
          character.affiliation = character.affiliation || 'Desconocida';
          character.gender = character.gender || 'Desconocido';
          character.race = character.race || 'Desconocida';
        });
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

  // Abrir modal para editar Ki
  openEditKiModal(character: any): void {
    this.editingKiCharacter = { ...character }; // Copiar para evitar modificar directamente el objeto original
  }

  // Cerrar el modal de edición de Ki
  closeEditKiModal(): void {
    this.editingKiCharacter = null;
  }

  // Guardar el nuevo valor de Ki
  saveKi(newKi: number): void {
    if (this.editingKiCharacter) {
      // Actualizamos el personaje en el array characters
      const index = this.characters.findIndex(
        (character) => character.id === this.editingKiCharacter.id
      );
      if (index !== -1) {
        this.characters[index].ki = newKi; // Actualizamos el valor de Ki
        // Guardamos el nuevo valor de Ki en localStorage
        localStorage.setItem(`ki_${this.characters[index].id}`, newKi.toString());
      }
    }
    this.closeEditKiModal();
  }
}
