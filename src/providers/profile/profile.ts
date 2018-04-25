import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profiles } from './profile.model';


@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient) {}

  loginByUsernameAndPassword(data: Object = null) {
    let url = 'http://localhost:3000/api/profiles?filter='+JSON.stringify(data);
    return this.http.get<Profiles>(url);
  }

  add(data) {
    return this.http.post('http://localhost:3000/api/profiles', data);
  }
}
