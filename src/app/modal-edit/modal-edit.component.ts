import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent {
  @Input() character: any | null = null;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() saveKi: EventEmitter<number> = new EventEmitter();

  constructor() {}

  // Método para cerrar el modal
  onCloseModal(): void {
    this.closeModal.emit();
  }

  // Método para guardar el valor de Ki
  onSaveKi(): void {
    if (this.character && this.character.ki !== null) {
      this.saveKi.emit(this.character.ki);
    }
  }
}
