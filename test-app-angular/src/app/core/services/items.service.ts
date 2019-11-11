import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/items';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemsService {
    constructor(private http: HttpClient) { }

    public getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`http://localhost:3004/items`)
            .pipe(map((response: any[]) => response.map(x => new Item())));
    }
}
