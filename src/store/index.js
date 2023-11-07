import TaskStore from './taskStore'
import PersonStore from './personTask'

class Store {
  constructor() {
    this.task = new TaskStore(this)
    this.person = new PersonStore(this)
  }
}

const store = new Store()
export default store
