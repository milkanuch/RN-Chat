import { rest } from 'msw';

export const EMPTY_OBJECT = Object.freeze({});

export const EMPTY_STRING = Object.freeze('');

export const EMPTY_ARRAY = Object.freeze([]);

export const STATUSES = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
});

export const handlers = [
  rest.get('/user/phone/+380979999999', (req, res, ctx) => {
    if (req.url.searchParams.get('phone') === '+380979999999') {
      return res(ctx.status(STATUSES.OK));
    }

    return res(ctx.status(STATUSES.NOT_FOUND));
  }),
];
