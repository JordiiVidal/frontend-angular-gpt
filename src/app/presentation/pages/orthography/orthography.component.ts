import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ChatMessageComponent, MyMessageComponent } from '@chatBubbles/index';
import { Message } from '@interfaces/message.interface';
import {
  TextMessageBoxComponent,
  TextMessageBoxContent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
} from '@textBoxes/index';
import { TypingLoaderComponent } from '@typingLoader/typing-loader.component';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent {
  public messages = signal<Message[]>([{ text: 'Hola', isGpt: true }]);
  public isLoading = signal<boolean>(false);
  public openAiService = inject(OpenAiService);

  handleMessage(prompt: String) {
    console.log(prompt);
  }

  handleMessageWithFile(prompt: String) {
    console.log(prompt);
  }

  handleMessageWithSelect({ prompt, selectedOption }: TextMessageBoxContent) {
    console.log(prompt);
  }
}
