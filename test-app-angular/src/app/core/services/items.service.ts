import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/items';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    public url = 'http://localhost:3004/items';

    constructor(private http: HttpClient) { }

    public getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.url).pipe(map((response: any[]) => response.map(x => new Item(x))));
    }

    public getItem(id: number): Observable<Item> {
        return this.http.get<Item>(this.url + '/' + id).pipe(map((response: any) => new Item(response)));
    }

    public createItem(item: Item): Observable<Item> {
        return this.http.post(this.url, item).pipe(map((response: any[]) => new Item(response)));
    }

    public updateItem(id: number, item: Item): Observable<Item> {
        return this.http.put(this.url + '/' + id, item).pipe(map((response: any) => new Item(response)));
    }

    public deleteItem(id: number): Observable<Item> {
        return this.http.delete(this.url + '/' + id).pipe(map((response: any) => new Item(response)));
    }
}
