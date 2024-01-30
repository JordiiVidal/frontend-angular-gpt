import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent } from '@chatBubbles/index';
import { TypingLoaderComponent } from 'app/presentation/components/typing-loader/typing-loader.component';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent {}
