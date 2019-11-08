import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/items';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemsService {
    constructor(private http: HttpClient) { }

    public getItems(): Observable<Items[]> {
        return this.http.get<Items[]>(`http://localhost:3004/items`)
            .pipe(map((response: any[]) => response.map(x => new Items())));
    }
}
