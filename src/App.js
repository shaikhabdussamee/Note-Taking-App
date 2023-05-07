import { createContext, useState } from "react";
import "./App.css";
import LeftSection from "./Components/Left/LeftSection";
import RightSection from "./Components/Right/RightSection";
import "bootstrap/dist/css/bootstrap.css";
import Content from "./Components/Right/Content";


export const CreateContext = createContext();

function App() {
  const [ishide,setIsHide] = useState(false)
  localStorage.setItem("note-data", JSON.stringify([]));
  return (
    <div className="App">
     
      <div className="Container">
        <div className="row">
          <div className="col col-md-3">
            <CreateContext.Provider value = {{ishide, setIsHide}}>
              <LeftSection />
            </CreateContext.Provider>
          </div>
          <div className="col col-lg-9">
            {
              ishide ? <Content /> : <RightSection />
            }
            {/* <RightSection /> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
