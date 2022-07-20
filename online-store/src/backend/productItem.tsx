export default class ProductItem {
  name: string;
  type: string;
  img: string;
  size: number;
  color: string;
  description: string;
  material: string;
  price: number;
  id: number;

  constructor(name: string,
              type: string,
              img: string,
              size: number,
              color: string,
              description: string,
              material: string,
              price: number,
              id: number) {
    this.name = name;
    this.type = type;
    this.img = img;
    this.size = size;
    this.color = color;
    this.description = description;
    this.material = material;
    this.price = price;
    this.id = id;
  }
}
