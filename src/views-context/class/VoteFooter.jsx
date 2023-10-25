import React from 'react'
import themeContext from '../../themeContext'

class VoteFooter extends React.PureComponent {
  render() {
    return (
      <themeContext.Consumer>
        {context => {
          const {change} = context

          return (
            <div>
              <button onClick={() => change('sup')}>支持</button>
              <button onClick={() => change('opp')}>反对</button>
            </div>
          )
        }}
      </themeContext.Consumer>
    )
  }
}

export default VoteFooter