import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-planet-modal',
  templateUrl: './planet-modal.component.html',
  styleUrls: ['./planet-modal.component.css'],
})
export class PlanetModalComponent implements OnInit {
  @Input() characterId!: number;
  @Output() closeModal = new EventEmitter<void>();

  selectedPlanet: any = null;

  constructor(
    private characterService: CharacterService,
    private planetService: PlanetService
  ) {}

  ngOnInit(): void {
    this.loadPlanet();
  }

  loadPlanet(): void {
    this.characterService.getCharacterById(this.characterId).subscribe(
      (character: any) => {
        if (character.originPlanet) {
          const planetId = character.originPlanet.id;
          this.planetService.getPlanetById(planetId).subscribe(
            (planet: any) => {
              this.selectedPlanet = planet;
            },
            (error) => {
              console.error('Error al cargar el planeta:', error);
            }
          );
        } else {
          console.warn('El personaje no tiene un planeta asociado.');
          this.selectedPlanet = null;
        }
      },
      (error) => {
        console.error('Error al cargar el personaje:', error);
      }
    );
  }

  close(): void {
    this.closeModal.emit();
  }
}
