import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent } from '@chatBubbles/index';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [CommonModule, ChatMessageComponent, MyMessageComponent],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent {}
