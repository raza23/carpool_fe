import School from "./Components/School";
import PickupArea from "./Components/PickUpArea";
import "./Styles/App.css";

// * Create school ✔️
// * Create roads ✔️
// * Began creating cars, dont make backend yet. can make it via here ✔️

function App() {
  return (
    <div className="App">
      <PickupArea />
      <School />
    </div>
  );
}

export default App;
