import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computer } from './computer.model';


@Injectable()
export class ComputersProvider {

  kind: string;
  constructor(public http: HttpClient) {}

  getComputersByKind(kind: string) {
    let filter = {"where":{"kind":kind}};
    let url = 'http://localhost:3000/api/computers?filter='+JSON.stringify(filter);
    return this.http.get<Computer[]>(url);
  }


}
