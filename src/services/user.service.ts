import { Injectable } from '@angular/core';
import { User } from 'src/dataType/interfaces';
import { UserConstant as userConst} from '../constants/UserConstants'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  checkUserExistsInList = (user: Partial<User>): boolean => {
    let isUserExists: boolean = false;
    if(!!this.isValidUser(user)) {
      isUserExists = true;
    }
    return isUserExists;
  }

  isValidUser = (user: Partial<User>) => {
    return userConst.find((userItem) => userItem.username === user.userName && userItem.password === user.password)
  }

  getUserData = (user: Partial<User>) => {
    return userConst.find((userItem) => userItem.username === user.userName)
  }
}
