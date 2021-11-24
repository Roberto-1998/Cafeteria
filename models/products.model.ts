
export class Producto{

  constructor(
      public name: string,
      public ingredients:[],
      public category: string,
      public price: number,
      public top3?: boolean,
      public img?: string,

  ){ }
}
