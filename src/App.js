import React ,{useEffect,useState}from "react";
import SiteLoader from "./components/SiteLoader/SiteLoader";
// import  SiteLoader  from "./components/SiteLoader/SiteLoader";
import { Router } from "./routes/Router";
import ReactGA from "react-ga4"
const trackingID = "G-RV3S1Y5KH6"
ReactGA.initialize(trackingID)
function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, );
  // }, []);
  return (
    <div className="App">
  {/* {loading &&
       <SiteLoader/>
      } */}
       {/* {!loading &&
            <Router/>
      } */}
      <Router/>
    </div>
  );
}

export default App;
