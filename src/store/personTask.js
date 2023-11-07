/* Person 版块的 Store */
import { observable, action } from 'mobx'

export default class PersonStore {
  constructor(root) {
    this.root = root
  }

  @observable info = null
  @action.bound queryInfo() {}
}
