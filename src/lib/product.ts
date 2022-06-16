import { Product } from './interfaces';

abstract class ProductBase implements Product {
    // properties/fields

  // constructor (auto implemented properties)
  constructor(
    public id: number,
    public name: string,
    public icon: string) { }

    validate(): boolean {
      throw new Error('Not implemented');
    }
}

export class FoodProduct extends ProductBase {
  // properties/fields

  // constructor (auto implemented properties)
  
  // functions/methods
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}