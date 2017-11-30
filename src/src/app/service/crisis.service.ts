/**
 * @author sunpengfei
 * @name crisis service
 * @desc 危机的服务service
 * @param api_url,headers
 */

//import angular core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

//import third package
import 'rxjs/add/operator/toPromise';

//import class
import { Crisis } from '../domain/crisis';

@Injectable()
export class CrisisService {
  private api_url = 'http://localhost:3000/crisis';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  //查询所有Crisis
  getCrisises(): Promise<Crisis[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Crisis[])
      .catch(this.handleError);
  }

  //按name新建Crisis
  createCrisisByName(name: string): Promise<Crisis> {
    let crisis = {
      name: name
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(crisis), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Crisis)
      .catch(this.handleError);
  }

  //删除某个Crisis
  deleteCrisis(crisis: Crisis): Promise<void> {
    const url = `${this.api_url}/${crisis.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  //按id删除某个Crisis
  deleteCrisisById(id: number): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
