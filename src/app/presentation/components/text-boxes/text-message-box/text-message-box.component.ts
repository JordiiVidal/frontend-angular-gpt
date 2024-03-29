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

@Component({
  selector: 'app-text-message-box',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToggleAttributePipe],
  templateUrl: './text-message-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxComponent {
  @Input() placeholder: string = 'Message ...';
  @Input() disableCorrections: boolean = true;
  @Output() onMessage: EventEmitter<string> = new EventEmitter();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
  });

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { prompt } = this.form.value;

    this.onMessage.emit(prompt ?? '');

    this.form.reset();
  }
}
