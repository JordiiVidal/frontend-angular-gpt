import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToggleAttributePipe } from '@pipes/toggle-attribute.pipe';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxContent {
  prompt: string;
  selectedOption: string;
}

@Component({
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToggleAttributePipe],
  templateUrl: './text-message-box-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent {
  @Input() placeholder: string = 'Message ...';
  @Input({ required: true }) options!: Option[];
  @Output() onMessage: EventEmitter<TextMessageBoxContent> = new EventEmitter();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption: ['', Validators.required],
  });

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { prompt, selectedOption } = this.form.value;

    this.onMessage.emit({ prompt: prompt!, selectedOption: selectedOption! });
    this.form.reset();
  }
}
