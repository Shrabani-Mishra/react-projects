import { EventHandling } from "./components/EventHandeling";
import { EventPropagation } from "./components/EventPropagation";
import { EventProps } from "./components/EventProps";
// import NetflixSeries from "./components/NetflixSeries";

const App = () => {
  return( 
  <section className="container">
 {/* <NetflixSeries />; */}
 {/* <EventHandling/> */}
 {/* <EventProps/> */}
<EventPropagation/>
  </section>
  )
};

export default App;