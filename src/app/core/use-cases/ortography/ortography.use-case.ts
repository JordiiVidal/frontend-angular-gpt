import { OrtographyResponse } from '@interfaces/ortography.response';
import { environment } from 'environments/environment.development';

export const ortographyUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/orthography-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!resp.ok) {
      throw Error('Connection Error');
    }

    const data = (await resp.json()) as OrtographyResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: 'Error',
    };
  }
};
