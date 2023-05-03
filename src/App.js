import "./App.css";
import LeftSection from "./Components/Left/LeftSection";
import RightSection from "./Components/Right/RightSection";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="row">
          <div className="col col-md-3">
            <LeftSection />
          </div>
          <div className="col col-lg-9">
            <RightSection />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
