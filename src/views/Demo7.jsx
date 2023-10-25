import React from 'react'

const Demo = props => {
  console.log('demo props: ', props)

  return (
    <div>HOC</div>
  )
}

const ProxyTest = Component => {
  const HOC = props => {
    console.log('hoc props: ', props)

    return (
      <Demo {...props} />
    )
  }

  return HOC
}

export default ProxyTest(Demo)