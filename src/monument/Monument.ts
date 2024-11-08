import { type MonumentLocation, type MonumentStructure } from "./types";

class Monument implements MonumentStructure {
  public id: string;
  public country: string;
  public city: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { country, city }: MonumentLocation,
  ) {
    this.country = country;
    this.city = city;
    this.id = crypto.randomUUID();
  }
}

export default Monument;
