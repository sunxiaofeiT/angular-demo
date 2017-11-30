/**
 * @author sunpengfei
 * @name dealRecord service
 * @desc 交易记录服务，处理了交易记录的相关操作。
 * @param api_url,headers
 */

//import angular core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

//import third package
import 'rxjs/add/operator/toPromise';

//import class
import { DealRecord } from '../domain/dealRecord';

@Injectable()
export class DealRecordService {
  private api_url = 'http://localhost:3000/dealRecords';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  //查询所有dealRecord
  getDealRecords(): Promise<DealRecord[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as DealRecord[])
      .catch(this.handleError);
  }

  //按name新建dealRecord
  createDealRecordByName(name: string): Promise<DealRecord> {
    let dealRecord = {
      name: name
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(dealRecord), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as DealRecord)
      .catch(this.handleError);
  }

  //删除某个dealRecord
  deleteDealRecord(dealRecord: DealRecord): Promise<void> {
    const url = `${this.api_url}/${dealRecord.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  //按id删除某个dealRecord
  deleteDealRecordById(id: number): Promise<void> {
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
