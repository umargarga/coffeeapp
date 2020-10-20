import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    const list = [
      new Coffee('Doublo Expresso', 'Sunny Cafe', new PlaceLocation('1234 Market Street', 'San Francisco')),
      new Coffee('Caramel Americano', 'Start Cafe', new PlaceLocation('Baze University', 'Abuja')),
    ];
    callback(list);

  }

  save(callback) {
    callback(true);
  }
}
