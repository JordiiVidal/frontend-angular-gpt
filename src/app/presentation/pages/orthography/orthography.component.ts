import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent } from '@chatBubbles/index';
import {
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
} from '@textBoxes/index';
import { TypingLoaderComponent } from '@typingLoader/typing-loader.component';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent {
  handleMessage(prompt: String) {
    console.log(prompt);
  }
}
