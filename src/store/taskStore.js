/* Task 版块的 Store */
import { observable, action, runInAction } from 'mobx'
// import { makeObservable, makeAutoObservable, observable, action } from 'mobx'
import { getTaskList } from '../api'

// MobX5 的写法
export default class TaskStore {
  constructor(root) {
    // root：最外层 Store 类的实例（其中包含了各个版块的实例）
    // 之后可以在 Task 版块下，基于 this.root 获取到根 Store 实例
    // 然后通过根 Store 实例来访问其他版块的 Store 实例
    this.root = root
  }

  @observable taskLists = []

  // 异步获取全部任务
  @action.bound async queryAllTasks() {
    let lists = []
    try {
      let result = await getTaskList(0)
      if (+result.code === 0) lists = result.lists
    } catch (_) {}

    runInAction(() => {
      this.taskLists = lists
    })
  }
  
  // 同步删除某一任务
  @action.bound removeTask(id) {
    let {taskLists} = this
    if (!Array.isArray(taskLists)) return 
    this.taskLists = taskLists.filter(item => {
      return +item.id !== +id
    })
  }

  // 同步修改某一任务
  @action.bound updateTask(id) {
    let {taskLists} = this
    if (!Array.isArray(taskLists)) return
    this.taskLists = taskLists.map(item => {
      if (+item.id === +id) {
        item.state = 2
        item.complete = new Date().toLocaleString('zh-CN')
      }
      return item
    })
  }
}

// MobX6 的写法
// export default class TaskStore {
//   constructor(root) {
//     this.root = root
//     // // 基于 makeObservable 给状态和方法设置装饰器效果
//     // makeObservable(this, {
//     //   taskLists: observable,
//     //   queryAllTasks: action.bound,
//     //   removeTask: action.bound,
//     //   updateTask: action.bound
//     // })

//     // 是对 makeObservable 的加强
//     // 可以自己给属性和方法设置装饰，等同于上述 makeObservable 操作
//     makeAutoObservable(this)
//   }

//   taskLists = []

//   // 异步获取全部任务
//   async queryAllTasks() {
//     let lists = []
//     try {
//       let result = await getTaskList(0)
//       if (+result.code === 0) lists = result.lists
//     } catch (_) {}

//     runInAction(() => {
//       this.taskLists = lists
//     })
//   }
  
//   // 同步删除某一任务
//   removeTask(id) {
//     let {taskLists} = this
//     if (!Array.isArray(taskLists)) return 
//     this.taskLists = taskLists.filter(item => {
//       return +item.id !== +id
//     })
//   }

//   // 同步修改某一任务
//   updateTask(id) {
//     let {taskLists} = this
//     if (!Array.isArray(taskLists)) return
//     this.taskLists = taskLists.map(item => {
//       if (+item.id === +id) {
//         item.state = 2
//         item.complete = new Date().toLocaleString('zh-CN')
//       }
//       return item
//     })
//   }
// }
