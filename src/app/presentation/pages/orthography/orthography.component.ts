import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { ChatMessageComponent } from '@chat/chat-message/chat-message.component';
import { Message } from '@interfaces/message.interface';
import {
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
} from '@textBoxes/index';
import { TypingLoaderComponent } from '@typingLoader/typing-loader.component';
import { Subject, finalize, takeUntil } from 'rxjs';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
    ChatMessageComponent,
  ],
  templateUrl: './orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyComponent implements OnDestroy {
  public messages = signal<Message[]>([{ text: 'Hola', isGpt: true }]);
  public isLoading = signal<boolean>(false);
  public openAiService = inject(OpenAiService);
  private destroy$: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleMessage(prompt: string) {
    this.isLoading.set(true);
    this.messages.update((prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt,
      },
    ]);
    this.openAiService
      .checkOrtography(prompt)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading.set(false))
      )
      .subscribe((response) => {
        this.isLoading.set(false);
        this.messages.update((prev) => [
          ...prev,
          {
            isGpt: true,
            text: response.message,
            info: response,
          },
        ]);
      });
  }
}
