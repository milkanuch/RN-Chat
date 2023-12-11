import { setupServer } from 'msw/node';

import { MOCKED_HANDLERS } from 'constants/mocks/handlers';

export const server = setupServer(...MOCKED_HANDLERS);
