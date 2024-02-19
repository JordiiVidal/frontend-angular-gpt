import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Info } from '@interfaces/message.interface';

@Component({
  selector: 'app-chat-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="text-3xl">Score: {{ info.userScore }}</h3>
    <p>{{ info.message }}</p>
    <ul>
      @for (error of info.errors; track $index; let first = $first) {
        <li>{{ error }}</li>
      } @empty {
        <li>Empty Errors</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInfoComponent {
  @Input({ required: true }) info!: Info;
}
