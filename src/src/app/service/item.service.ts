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
  private api_url = 'http://localhost:3000/items';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  //查询所有item
  getItems(): Promise<Item[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item[])
      .catch(this.handleError);
  }

  //按id查询item
  getItemById(id: number): Promise<Item> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item)
      .catch(this.handleError);
  }

  //按ownerId查询item
  getItemesByOwnerId(ownerId: number): Promise<Item[]> {
    const url = `${this.api_url}/?ownerId=${ownerId}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item[])
      .catch(this.handleError);
  }

  //search item
  searchItem(term: string): Observable<Item[]> {
    return this.http
      .get(`${this.api_url}?name_like=${term}`)
      .map(response => response.json() as Item[]);
  }

  //新建item
  createItem(item: Item): Promise<Item> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item)
      .catch(this.handleError);
  }

  //按name与userId新建item
  createItemByNameUserId(name: string, ownerId: number): Promise<Item> {
    let item = {
      name: name,
      ownerId: ownerId
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item)
      .catch(this.handleError);
  }

  //修改item
  updateItem(item: Item): Promise<Item> {
    const url = `${this.api_url}/${item.iid}`;
    return this.http
      .put(url, JSON.stringify(item), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Item)
      .catch(this.handleError);
  }

  //删除某个item
  deleteItem(item: Item): Promise<void> {
    const url = `${this.api_url}/${item.iid}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  //按id删除某个item
  deleteItemById(id: number): Promise<void> {
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
