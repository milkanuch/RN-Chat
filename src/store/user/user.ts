import { action, computed, makeObservable, observable } from 'mobx';

import { UserStore } from './user.types';

class User implements UserStore {
  @observable
  public isRegistered = false;

  public phoneNumber = '';

  public firstName = '';
  constructor() {
    makeObservable(this);
  }

  @action
  public setIsRegistered = (value: boolean) => {
    this.isRegistered = value;
  };

  @computed
  public get getIsRegistered() {
    return this.isRegistered;
  }
}

export const user = new User();
