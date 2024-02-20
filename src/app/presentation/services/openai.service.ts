import { Injectable } from '@angular/core';
import { ortographyUseCase, prosConsUseCase } from '@useCases/index';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  checkOrtography(prompt: string) {
    return from(ortographyUseCase(prompt));
  }

  prosConsDiscuss(prompt: string) {
    return from(prosConsUseCase(prompt));
  }
}
