import ob from "../backend/products.json";
import ProductItem from '../backend/productItem';

export default class Products {
  static obInArr:Array<ProductItem> = ob.products;

  static getProducts():Array<ProductItem> {
    return this.obInArr;
  }
}
