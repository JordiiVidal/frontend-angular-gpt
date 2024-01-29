import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-orthography',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './orthography.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrthographyComponent { }
