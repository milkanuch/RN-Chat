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
    `http://localhost/auth/exists/:phone`,
    (
      request: RestRequest,
      response: ResponseComposition,
      restContext: RestContext,
    ) => {
      const phoneNumberFromRequestUrl = request.url.href.split('/').pop();

      if (phoneNumberFromRequestUrl === '+380979999999') {
        return response(restContext.status(STATUSES.OK));
      }

      return response(restContext.status(STATUSES.NOT_FOUND));
    },
  ),
  rest.post(
    'http://localhost/auth/auth/login',
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
