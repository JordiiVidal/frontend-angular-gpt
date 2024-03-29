import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-to-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textToAudio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextToAudioComponent {}
