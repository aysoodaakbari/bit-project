import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Tradingview = () => {
  return (
    <>
    <div style={{ float: "left", width: "60%", height: "100vh" }}>
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        interval="15"
        timezone="Etc/UTC"
        theme={Themes.DARK}
        locale="en"
        autosize
      />
    </div>
   
  </>
  )
}

export default Tradingview