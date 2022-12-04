import React from "react";

export default function AddCarForm() {
  const addCar = () => {
    console.log("Adding");
  };
  return (
    <div>
      {" "}
      <div class="form">
        <div class="input-container ic1">
          <input
            id="firstname"
            class="input"
            type="text"
            placeholder="First Name "
          />
        </div>
        <div class="input-container ic2">
          <input
            id="lastname"
            class="input"
            type="text"
            placeholder="Last Name "
          />
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder="Email " />
        </div>
        <button type="text" class="submit" onClick={addCar}>
          submit
        </button>
      </div>
    </div>
  );
}
