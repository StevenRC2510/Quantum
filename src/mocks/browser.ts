import { setupWorker } from 'msw';

import { handlers } from 'mocks/handles';

export const worker = setupWorker(...handlers);
