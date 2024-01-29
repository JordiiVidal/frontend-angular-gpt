import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pros-cons-stream',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prosConsStream.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProsConsStreamComponent {}
