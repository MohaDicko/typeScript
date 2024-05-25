// src/Car.ts

// Définir l'interface Vehicle
export interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémenter la classe Car qui adhère à l'interface Vehicle
  export class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  