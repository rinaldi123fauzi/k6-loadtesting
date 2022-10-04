import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10000,
  duration: '1s',
  thresholds: {
    'checks{myTag:hola}': ['rate>0.9'],
  },
};

export default function () {
  let res;

  res = http.get('https://www.facebook.com/');
  check(res, {
    'status is 500': (r) => r.status == 500,
  });

  res = http.get('https://www.facebook.com/');
  check(
    res,
    {
      'status is 200': (r) => r.status == 200,
    },
    { myTag: 'hola' }
  );

  sleep(1);
}
