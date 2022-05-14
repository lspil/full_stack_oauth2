import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    doPost(url: string, body: any, options: { headers: HttpHeaders } ) {
        return this.httpClient.post(url, body, options);
    }

    doGet(url: string, options: { headers: HttpHeaders }) {
        return this.httpClient.get(url, options);
    }

    doPut() {
        //etc
    }
}