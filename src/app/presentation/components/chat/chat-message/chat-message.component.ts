import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatInfoComponent } from '@chat/chat-info/chat-info.component';
import { Message } from '@interfaces/message.interface';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule, ChatInfoComponent, MarkdownComponent],
  templateUrl: './chat-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  @Input({ required: true }) message!: Message;
}
