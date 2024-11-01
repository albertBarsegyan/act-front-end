import ky from 'ky';

export const mainApiInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [(request) => request],
    afterResponse: [(_, __, response) => response],
    beforeError: [(error) => Promise.reject(error)],
  },
});
