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
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToggleAttributePipe],
  templateUrl: './text-message-box-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
  @Input() placeholder: string = '';
  @Input() disableCorrections: boolean = true;

  @Output() onMessage: EventEmitter<String> = new EventEmitter();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required],
  });

  handleFile(event: any) {
    const attach = event.target.files.item(0);
    this.form.controls.file.setValue(attach);
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { prompt, file } = this.form.value;

    this.onMessage.emit(prompt ?? '');

    this.form.reset();
  }
}
