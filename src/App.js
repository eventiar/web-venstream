import "./App.css";
import Navigation from "./Component/Navigation";
import Intro from "./Component/Intro";
import Trending from "./Component/Trending";

import "./Style/landingpage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
