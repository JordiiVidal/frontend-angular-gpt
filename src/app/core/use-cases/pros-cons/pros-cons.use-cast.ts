import ProsConsResponse from '@interfaces/pros-cons.response';
import { environment } from 'environments/environment.development';

export const prosConsUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(`${environment.backendApi}/pros-cons-discuss`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!resp.ok) {
      throw Error('Connection Error');
    }

    const data = await resp.text();

    return {
      ok: true,
      content: data,
    };
  } catch (error) {
    return {
      ok: false,
      content: '',
    };
  }
};
