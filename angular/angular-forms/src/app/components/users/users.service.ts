import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { User } from './user.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  usersAvailable = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http
  ) { console.log('UserService constructed');  }

  public getUsers(): Observable<User[]> {
    console.log('getUsers');
    return this.http.get(`${environment.apiUrl}/api/persons`).pipe(
      //   convert incoming responsestring to json
      // map(response => response.json()),
      //   get only the results property
      // map(response => response.results),
      //   optionally log the results
      // tap(console.log),
      //   convert json array to User array
      // map(users => users.map(data => new User(data))),
      //   optionally log the results
      // tap(console.log)

      // all of the above can also be done in one operation:
      map(response => response.json().results.map(data => new User(data))),
      tap(users => {
        this.users = users;
        this.usersAvailable.next(true);
      })
    );
  }

  getUser(id: number): User {
    console.log(`getUser(${id})`);

    if(this.users && id >= 0 && id < this.users.length){
      // id is valid and users are available
      return this.users[id];
    } else {
      return undefined;
    }
  }

}
