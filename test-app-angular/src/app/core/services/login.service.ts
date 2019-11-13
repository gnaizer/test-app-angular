import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public url = 'http://localhost:3004/profile';

    constructor(private http: HttpClient) { }

    public login(username: string, password: string) {
        return this.http.post<any>(this.url, { username, password }).pipe(map(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    }

    public logout() {
        localStorage.removeItem('currentUser');
    }

}
