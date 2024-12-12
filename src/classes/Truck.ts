// Import the Vehicle, Motorbike, Car, and Wheel classes
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';

// Declare the AbleToTow interface
interface AbleToTow {
  towingCapacity: number;
  tow(vehicle: Truck | Motorbike | Car): void;
}

// Declare the Truck class extending Vehicle and implementing AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.make && vehicle.model) {
      console.log(`Vehicle make: ${vehicle.make}`);
      console.log(`Vehicle model: ${vehicle.model}`);
    } else {
      console.log(`Vehicle make and model are not available`);
    }

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Vehicle is being towed`);
    } else {
      console.log(`Vehicle is too heavy to be towed`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;