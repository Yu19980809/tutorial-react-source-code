const VoteFunction = ({ title }) => {
  let aNum = 10,
      oNum = 5
  
  return (
    <div>
      <div className="header">
        <h2>{title}</h2>
        <span>{aNum + oNum}人</span>
      </div>

      <div className="main">
        <p>支持人数: {aNum}人</p>
        <p>反对人数：{oNum}人</p>
      </div>

      <div className="footer">
        <button onClick={() => {
          aNum++
          console.log(aNum)
        }}>
          支持
        </button>

        <button onClick={() => {
          oNum++
          console.log(oNum)
        }}>
          反对
        </button>
      </div>
    </div>
  )
}

export default VoteFunction
