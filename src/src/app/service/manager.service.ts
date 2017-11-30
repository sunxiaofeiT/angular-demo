/**
 * @author sunpengfei
 * @name manager service
 * @desc manager的服务，完成manager的SCDU操作
 * @param api_url,headers
 */

//import angular core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

//import third package
import 'rxjs/add/operator/toPromise';

//import class
import { Manager } from '../domain/manager';
import { AnimationStaggerMetadata } from '@angular/core/src/animation/dsl';

@Injectable()
export class ManagerService {

  private api_url = 'http://localhost:3000/managers';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  //查询所有manager
  getManagers(): Promise<Manager[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Manager[])
      .catch(this.handleError);
  }

  //按id查询manager
  getManagerById(id: number): Promise<Manager> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Manager)
      .catch(this.handleError);
  }

  //按managername查询manager
  getManagerByManagername(managername: string): Promise<Manager> {
    const url = `${this.api_url}/?managername=${managername}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        let managers = res.json() as Manager[];
        return (managers.length > 0) ?managers[0] : null;
      })
      .catch(this.handleError);
  }

  //创建一个manager
  createManager(manager: Manager): Promise<Manager> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(manager), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Manager)
      .catch(this.handleError);
  }

  //修改某个manager
  updateManager(manager: Manager): Promise<Manager> {
    const url = `${this.api_url}/${manager.id}`;
    return this.http
      .put(url, JSON.stringify(manager), { headers: this.headers })
      .toPromise()
      .then(() => manager)
      .catch(this.handleError);
  }

  //删除某个manager
  deleteManager(manager: Manager): Promise<void> {
    const url = `${this.api_url}/${manager.id}`;
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