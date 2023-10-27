import React, { useContext } from 'react'
import { Button } from 'antd'
import themeContext from '../themeContext'
import action from '@/store/actions'

const VoteFooter = () => {
  const {store} = useContext(themeContext)

  const handleSup = () => {
    store.dispatch(action.vote.support())
  }

  const handleOpp = () => {
    store.dispatch(action.vote.oppose())
  }

  return (
    <div className="footer">
      <Button type="primary" onClick={handleSup}>支持</Button>
      <Button type="primary" danger onClick={handleOpp}>反对</Button>
    </div>
  )
}

export default VoteFooter