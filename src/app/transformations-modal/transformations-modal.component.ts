import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { TransformationsService } from '../services/transformations.service';

@Component({
  selector: 'app-transformations-modal',
  templateUrl: './transformations-modal.component.html',
  styleUrls: ['./transformations-modal.component.css'],
})
export class TransformationsModalComponent implements OnInit {
  @Input() characterId!: number; 
  @Output() closeModal = new EventEmitter<void>();
  character: any = null; 
  transformations: any[] = []; 
  currentIndex: number = 0; 

  constructor(
    private characterService: CharacterService,
    private transformationsService: TransformationsService
  ) {}

  ngOnInit(): void {
    if (this.characterId) {
      this.loadCharacterData();
    } else {
      console.error('No se recibió un ID de personaje válido.');
    }
  }

  loadCharacterData(): void {
    this.characterService.getCharacterById(this.characterId).subscribe(
      (character: any) => {
        this.character = character;
        if (character.transformations && character.transformations.length > 0) {
          this.transformations = character.transformations; // Cargar las transformaciones directamente
        } else {
          console.warn('El personaje no tiene transformaciones asociadas.');
          this.transformations = [];
        }
      },
      (error) => {
        console.error('Error al cargar el personaje:', error);
      }
    );
  }

 prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.transformations.length) % this.transformations.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.transformations.length;
  }

  close(): void {
    this.closeModal.emit();
  }
}
