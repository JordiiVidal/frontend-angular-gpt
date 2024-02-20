import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ChatMessageComponent } from '@chat/chat-message/chat-message.component';
import { Message } from '@interfaces/message.interface';
import { TextMessageBoxComponent } from '@textBoxes/index';
import { TypingLoaderComponent } from '@typingLoader/typing-loader.component';
import { OpenAiService } from 'app/presentation/services/openai.service';
import { Subject, finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pros-cons',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './prosCons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsComponent {
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
        finalize(() => this.isLoading.set(false)),
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
