class Coffee {
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(public name: string, place: string, public location: PlaceLocation) {

  }
}
