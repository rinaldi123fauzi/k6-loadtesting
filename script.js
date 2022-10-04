import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 66,
    duration: "1s"
}

export default function (){
    http.get('http://datacq.pt-sena.com/users/sign_in');
    sleep(1);
}