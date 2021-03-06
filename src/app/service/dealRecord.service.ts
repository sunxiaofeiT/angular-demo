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
import { DealRecord } from '../domain/dealrecord';

@Injectable()
export class DealRecordService {
  // private api_url = 'http://123.206.227.133:3000/dealRecords';
  private api_url = 'http://api.bmob.cn/1/classes/dealRecord';
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'X-Bmob-Application-Id': '1d87d439149c0552749458257c12213f',
    'X-Bmob-REST-API-Key': '299aa97d12089144229033db7b8e8176',
  });

  constructor(private http: Http) { }

  //查询所有dealRecord
  getDealRecords(): Promise<DealRecord[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json().results as DealRecord[])
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
      .then(res => res.json().results as DealRecord)
      .catch(this.handleError);
  }

  //删除某个dealRecord
  deleteDealRecord(dealRecord: DealRecord): Promise<void> {
    const url = `${this.api_url}/${dealRecord.objectId}`;
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
