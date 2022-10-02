import { Injectable } from '@angular/core';
import { User } from '../shared/models/shared-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] | null;

  constructor() {
    this.users = localStorage.getItem('users')
      ? (JSON.parse(localStorage.getItem('users') as string) as User[])
      : [];
  }

  public addNewUser(user: User) {
    this.users?.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  public findOne(user: User): boolean {
    return !!this.users?.filter((_user) => _user.username === user.username)[0];
  }
}
