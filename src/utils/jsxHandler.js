/**
 * @function 创建虚拟DOM对象
 * @param {string|ele} ele 元素标签名（或组件）
 * @param {object} props 元素的属性集合(没有属性则为null)
 * @param  {createElement(...)} children 当前元素的子节点
 */
export const createElement = (ele, props, ...children) => {
  let virtualDOM = {
    $$typeof: Symbol('react.element'),
    key: null,
    ref: null,
    type: null,
    props: {}
  }

  // 处理 type
  virtualDOM.type = ele

  // 处理 props
  if (props !== null) {
    virtualDOM.props = {...props}
  }

  // 处理 children
  const len = children.length
  if (len === 1) virtualDOM.props.children = children[0]
  if (len > 1) virtualDOM.props.children = children

  return virtualDOM
}

/**
 * @function 把虚拟DOM变为真实DOM
 * @param {virtualDOM object} virtualDOM 虚拟DOM对象
 * @param {ele} container 容器
 */
export const render = (virtualDOM, container) => {
  const {type, props} = virtualDOM
  if (typeof type === 'string') {
    // 说明存储的是一个标签名，需要动态创建该标签
    const ele = document.createElement(type)

    // 为创建的标签设置相关的属性&子节点
    each(props, (key, value) => {
      // className 的处理（此时value存储的是样式类名）
      if (key === 'className') {
        ele.className = value
        return
      }

      // style 的处理（此时value存储的是样式对象）
      if (key === 'style') {
        each(value, (attr, val) => {
          ele.style[attr] = val
        })
        return
      }

      // 子节点的处理（此时value存储的是children属性值）
      if (key === 'children') {
        let children = value
        if (!Array.isArray(children)) children = [children]
        children.forEach(child => {
          // 子节点是文本节点：直接插入即可
          if (/^(string|number)$/.test(typeof child)) {
            const node = document.createTextNode(child)
            ele.appendChild(node)
            return
          }

          // 子节点是 virtualDOM：递归处理
          render(child, ele)
        })
        return
      }

      ele.setAttribute(key, value)
    })

    container.appendChild(ele)
  }
}

/**
 * @function 迭代对象
 * @param {object} obj 进行迭代的对象
 * @param {function} callback 回调函数
 * @description 基于 for...in 循环会存在一些弊端（性能较差，既可以迭代共有的，也可以迭代私有的
 *              只能迭代可枚举、非Symbol的属性...）
 */
const each = (obj, callback) => {
  if (obj === null || typeof obj !== 'object') throw new TypeError('obj is not an object')
  if (typeof callback !== 'function') throw new TypeError('callback is not a function')

  // 获取所有私有属性并循环进行操作
  let keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    const value = obj[key]
    callback(key, value)
  })
}
