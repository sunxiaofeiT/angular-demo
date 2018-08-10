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

  // private api_url = 'http://123.206.227.133:3000/managers';
  private api_url = 'http://api.bmob.cn/1/classes/manager'
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'X-Bmob-Application-Id': '1d87d439149c0552749458257c12213f',
    'X-Bmob-REST-API-Key': '299aa97d12089144229033db7b8e8176',
  });

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
    const url = `${this.api_url}?where={"id":${id}}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json().results[0] as Manager)
      .catch(this.handleError);
  }

  //按managername查询manager
  getManagerByManagername(managername: string): Promise<Manager> {
    const url = `${this.api_url}?where={"username":"${managername}"}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        let managers = res.json().results as Manager[];
        console.log(managers);
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
      .then(res => res.json().results[0] as Manager)
      .catch(this.handleError);
  }

  //修改某个manager
  updateManager(manager: Manager): Promise<Manager> {
    let param = {
      name: manager.name,
      username: manager.username,
      password: manager.password,
    }
    const url = `${this.api_url}/${manager.objectId}`;
    return this.http
      .put(url, JSON.stringify(param), { headers: this.headers })
      .toPromise()
      .then(() => manager)
      .catch(this.handleError);
  }

  //删除某个manager
  deleteManager(manager: Manager): Promise<void> {
    const url = `${this.api_url}/${manager.objectId}`;
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