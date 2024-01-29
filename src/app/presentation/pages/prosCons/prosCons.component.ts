import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pros-cons',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './prosCons.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsConsComponent { }
