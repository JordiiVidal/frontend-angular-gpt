import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-assistant',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './assistant.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantComponent { }
