import { useState } from 'react'
import './App.css'
import TrainRoute from './TrainRoute.jsx'

const RouteInfo = [
  {
    "CTARoutes":{
      "TimeStamp":"2025-05-24T20:57:53",
      "ErrorCode":"0",
      "ErrorMessage":null,
      "RouteStatus":"Normal Service",
      "RouteStatusColor":"404040",
      "RouteInfo": 
      [

        {
          "Route":"Blue Line",
          "RouteColorCode":"00a1de",
          "RouteTextColor":"#FFF",
          "ServiceId":"Blue",
          "RouteURL":{"#cdata-section":"http://www.transitchicago.com/blueline/"}
        },
        {
            "Route":"Green Line",
            "RouteColorCode":"4D8C63",
            "RouteTextColor":"#FFF",
            "ServiceId":"Green",
            "RouteURL":{"#cdata-section":"http://www.transitchicago.com/greenline/"}
        },
        {
          "Route":"Pink Line",
          "RouteColorCode":"F294B6",
          "RouteTextColor":"#FFF",
          "ServiceId":"Pink",
          "RouteURL":{"#cdata-section":"http://www.transitchicago.com/pinkline/"}
        }
      ]
     
    }
  }
];





function App() {

  const routes = RouteInfo[0].CTARoutes.RouteInfo;
  const [selectedRoute, setRoute] = useState(0);

  return (
    <>
    <div>
      <h1>CTA Routes</h1>
    </div>
    <div>
      <form>
        <h3>Choose Your Route:</h3>
          <select id="routes" name="routelist" onChange={(evt) => setRoute(evt.target.value)}>
            <option value={0}>{routes[0].Route}</option>
            <option value={1}>{routes[1].Route}</option>
            <option value={2}>{routes[2].Route}</option>
          </select>
      </form>
      <TrainRoute stuff={routes[selectedRoute]}></TrainRoute>
    </div>
    </>
  )
}

export default App
