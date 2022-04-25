import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";

console.log(trees);
wildlife();

function ColoradoStateParks() {
 // => "42 parks!"

  return (
    <div>
      <MesaVerde />
    </div>)
}

export default ColoradoStateParks;