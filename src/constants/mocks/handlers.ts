import {
  ResponseComposition,
  rest,
  RestContext,
  RestHandler,
  RestRequest,
} from 'msw';

import { STATUSES } from 'constants/mocks/mocks';

export const MOCKED_HANDLERS: RestHandler[] = [
  rest.get(
    `${process.env.API_URL}/auth/exists/+3801234567890`,
    (
      request: RestRequest,
      response: ResponseComposition,
      restContext: RestContext,
    ) => {
      if (request.url.searchParams.get('phone') === '+380979999999') {
        return response(restContext.status(STATUSES.OK));
      }

      return response(restContext.status(STATUSES.NOT_FOUND));
    },
  ),
  rest.post(
    '/auth/login',
    (
      request: RestRequest,
      response: ResponseComposition,
      restContext: RestContext,
    ) => {
      return response(
        restContext.json({
          isRegistered: true,
        }),
      );
    },
  ),
];
