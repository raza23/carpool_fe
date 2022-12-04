import React, { useState, useEffect } from "react";
// import Cars from "../data/cars.json";

const cars_api = "/api";

function PickUpArea() {
  const [cars, setCars] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    fetch(cars_api)
      .then(res => res.json())
      .then(cars_fetch => setCars(cars_fetch));
    setFetching(true);
  };

  let carModel =
    cars &&
    cars.map(car => (
      <>
        {car.model}-{car.name}_
      </>
    ));
  //   debugger;

  console.log(cars);
  // console.log(cars.users);
  console.log(fetching);

  //   if (!fetching) return <p>Loading</p>;
  return (
    <div>
      <div className="PickUpArea">
        <p>PickupArea</p>
        <p>{carModel}</p>
      </div>
    </div>
  );
}

export default PickUpArea;
