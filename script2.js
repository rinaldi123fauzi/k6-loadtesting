import http from 'k6/http';
import {check, sleep} from "k6";

// export const options = {
//     vus: 10,
//     duration: "30s"
// }

// export default function (){
//     http.get('https://www.incrypto.co.id/');
//     sleep(1);
// }

export const options = {
    stages:[
        {duration: "10s", target: 5},
        {duration: "15s", target: 10},
        {duration: "5s", target: 2},
    ]
}

export default function (){
    const res = http.get("https://www.incrypto.co.id/")
    check(res, {'status was 200':r => r.status == 200})
    sleep(1)
}

