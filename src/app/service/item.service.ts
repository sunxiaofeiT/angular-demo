/**
 * @author sunpengfei 
 * @name item service
 * @desc item商品的服务
 * @param api_url,headers
 * @method 
 */

//import angular core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

//import third package
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//import class
import { Item } from '../domain/item';

@Injectable()
export class ItemService {
  // private api_url = 'http://123.206.227.133:3000/items';
  private api_url = 'http://api.bmob.cn/1/classes/item';
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'X-Bmob-Application-Id': '1d87d439149c0552749458257c12213f',
    'X-Bmob-REST-API-Key': '299aa97d12089144229033db7b8e8176',
  });

  constructor(private http: Http) { }

  //查询所有Item
  getItems(): Promise<Item[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json().results as Item[])
      .catch(this.handleError);
  }

  //按id查询Item
  getItemById(id: number): Promise<Item> {
    const url = `${this.api_url}?where={"id":${id}}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json().results[0]   as Item)
      .catch(this.handleError);
  }

  //按ownerId查询Item
  getItemsByOwnerId(ownerId: number): Promise<Item[]> {
    const url = `${this.api_url}?where={"ownerId":${ownerId}}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json().results as Item[])
      .catch(this.handleError);
  }

  //search item
  searchItem(term: string): Observable<Item[]> {
    return this.http
      // .get(`${this.api_url}?name_like=${term}`)
      .get(`${this.api_url}?where={"name":"${term}"}`, {headers: this.headers})
      .map(response => response.json().results as Item[]);
  }

  /**
   * 新建item
   * @param item 
   */
  createItem(item: Item): Promise<Item> {
    let param = {
      name: item.name,
      desc: item.desc,
      price: Number(item.price),
      count: Number(item.count),
      classification: item.classification,
      ownerId: item.ownerId,
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(param), { headers: this.headers })
      .toPromise()
      .then(res => res.json().results as Item)
      .catch(this.handleError);
  }

  /**
   * 新建item
   * @param name 
   * @param ownerId 
   */
  createItemByNameManagerId(name: string, ownerId: number): Promise<Item> {
    let item = {
      name: name,
      ownerId: ownerId
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(res => res.json().results as Item)
      .catch(this.handleError);
  }

  /**
   * 修改Item
   * @param item 
   */
  updateItem(item: Item): Promise<Item> {
    const url = `${this.api_url}/${item.objectId}`;
    let params = {
      name: item.name,
      price: item.price,
      count: item.count,
      desc: item.desc,
      classification: item.classification,
      ownerId: item.ownerId,
    };
    return this.http
      .put(url, JSON.stringify(params), { headers: this.headers })
      .toPromise()  
      .then(res => alert( '修改成功!'))
      .catch(this.handleError);
  }

  /**
   * 删除Item
   * @param heitemro 
   */
  deleteItem(item: Item): Promise<void> {
    const url = `${this.api_url}/${item.objectId}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  /**
   * 删除一个item
   * @param id 
   */
  deleteItemById(id: number): Promise<void> {
    return this.http.get(this.api_url, {headers: this.headers}).toPromise().then(
      (res) => {
        let objectId = res.json().results[0].objcetId;
        let url = `${this.api_url}/${objectId}`;
        return this.http.delete(url, { headers: this.headers }).toPromise().then(() => null).catch(this.handleError);
      } 
    )
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
