import React, { useState, useEffect } from "react";
import Cars from "../data/cars.json";

// export default class PickUpArea extends Component {
//   render() {
//     console.log(Cars);
//     return (
//       <div className="PickUpArea">
//         <p>PickupArea</p>
//       </div>
//     );
//   }
// }

function PickUpArea() {
  const [cars, setCars] = useState([Cars]);
  let carModel = Cars.map(car => <>{car.model}</>);
  console.log(cars);
  return (
    <div className="PickUpArea">
      <p>PickupArea</p>
      <p>{carModel}</p>
    </div>
  );
}

export default PickUpArea;
