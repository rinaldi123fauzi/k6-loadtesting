import http from 'k6/http';

export default function () {
  const url = 'http://localhost:3000/auth/signin';
  const payload = JSON.stringify({
    orang_mail: 'ndlfauzi@gmail.com',
    orang_password: 'crypto123',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}